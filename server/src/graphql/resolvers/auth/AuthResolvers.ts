import { AuthenticationError } from "apollo-server-core";
import bcrypt from "bcrypt";
import { MongooseError } from "mongoose";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import UserModel from "../../../models/UserModel";
import { IServerContext } from "../../../types/context";
import { sendCookie } from "../../../utils/cookies";
import { signAccessToken, signRefreshToken } from "../../../utils/tokens";
import {
  LoginUserInput,
  LoginUserResponse,
  LogoutResponse,
  RegisterUserInput,
  RegisterUserResponse,
  RestoreSessionResponse,
} from "../../schema/auth/AuthSchemas";

@Resolver()
export class AuthResolver {
  @Query(() => String, { name: "HelloWorld" })
  HelloWorld(@Ctx() ctx: IServerContext): String | AuthenticationError {
    if (!ctx.user)
      return new AuthenticationError("Please login to view this information");
    return `Hey, ${ctx.user.name}, this is a message from the server. 🥂`;
  }

  @Mutation(() => RegisterUserResponse)
  async RegisterUser(
    @Arg("registerUserInput") registerUserInput: RegisterUserInput,
    @Ctx() ctx: IServerContext
  ): Promise<RegisterUserResponse | Error> {
    try {
      const hashedPassword = await bcrypt.hash(registerUserInput.password, 12);
      const user = await UserModel.create({
        ...registerUserInput,
        password: hashedPassword,
      });
      const accessToken = signAccessToken(user);
      const refreshToken = signRefreshToken(user);

      // send cookies once account is created
      sendCookie(ctx.res, "accessToken", accessToken, 1000 * 30);
      sendCookie(
        ctx.res,
        "refreshToken",
        refreshToken,
        1000 * 60 * 60 * 24 * 7
      );

      return {
        _id: user._id,
        registerSuccess: true,
        accessToken: accessToken,
        refreshToken: refreshToken,
      };
    } catch (err) {
      return Error("Email is already registerd, please sign in.");
    }
  }

  @Mutation(() => LoginUserResponse)
  async LoginUser(
    @Arg("loginUserInput") loginUserInput: LoginUserInput,
    @Ctx() ctx: IServerContext
  ): Promise<LoginUserResponse | Error> {
    if (!loginUserInput.email || !loginUserInput.password)
      return Error("Email and password are both required.");

    const user = await UserModel.findOne({
      email: loginUserInput.email,
    });

    if (!user) return Error("User with this email does not exist.");

    const passwordsMatch = await bcrypt.compare(
      loginUserInput.password,
      user.password as string
    );

    if (!passwordsMatch)
      return Error(
        "Please make sure you entered the correct email and password."
      );

    const accessToken = signAccessToken(user);
    const refreshToken = signRefreshToken(user);

    // send cookies on login
    sendCookie(ctx.res, "accessToken", accessToken, 1000 * 30);
    sendCookie(ctx.res, "refreshToken", refreshToken, 1000 * 60 * 60 * 24 * 7);

    return {
      _id: user._id,
      loginSuccess: true,
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
  }

  @Mutation(() => LogoutResponse)
  LogoutUser(@Ctx() ctx: IServerContext): LogoutResponse | AuthenticationError {
    if (!ctx.user) return new AuthenticationError("You are not logged in.");
    // remove cookies from client
    sendCookie(ctx.res, "accessToken", null, 0);
    sendCookie(ctx.res, "refreshToken", null, 0);
    return {
      _id: ctx.user._id,
      logoutSuccess: true,
      accessToken: null,
      refreshToken: null,
      message: `See you soon, ${ctx.user.name}`,
    };
  }

  @Query(() => RestoreSessionResponse)
  RestoreSession(
    @Ctx() ctx: IServerContext
  ): RestoreSessionResponse | AuthenticationError {
    if (!ctx.user) return new AuthenticationError("Please logged in.");

    return {
      sessionRestored: true,
      _id: ctx.user._id,
      name: ctx.user.name,
      email: ctx.user.email,
      role: ctx.user.role,
      avatarImg: ctx.user.avatarImg,
      handle: ctx.user.handle,
    };
  }
}

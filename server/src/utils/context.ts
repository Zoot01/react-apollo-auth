import chalk from "chalk";
import jwt from "jsonwebtoken";
import UserModel from "../models/UserModel";
import { IServerContext } from "../types/context";
import { sendCookie } from "./cookies";
import { IJwtValidResponse, signAccessToken, signRefreshToken } from "./tokens";

export const context = async ({
  req,
  res,
}: IServerContext): Promise<IServerContext> => {
  const accessToken = req.cookies["accessToken"];
  const refreshToken = req.cookies["refreshToken"];

  if (accessToken) {
    // token valid return user to CTX
    try {
      jwt.verify(accessToken, process.env.JWT_ACCESS_SECRET as string);
      return {
        req,
        res,
        user: <IJwtValidResponse>jwt.decode(accessToken),
      };
    } catch (err) {
      return {
        req,
        res,
        user: null,
      };
    }
  }

  if (!accessToken && refreshToken) {
    try {
      jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as string);

      const decodedToken = <IJwtValidResponse>jwt.decode(refreshToken);

      const user = await UserModel.findById(decodedToken._id);

      if (user?.refreshTokenCount !== decodedToken.refreshTokenCount) {
        sendCookie(res, "accessToken", null, 0);
        sendCookie(res, "refreshToken", null, 0);
        return {
          req,
          res,
          user: null,
        };
      }

      sendCookie(res, "accessToken", signAccessToken(user), 1000 * 30);
      sendCookie(
        res,
        "refreshToken",
        signRefreshToken(user),
        1000 * 60 * 60 * 24 * 7
      );

      return {
        req,
        res,
        user: user,
      };
    } catch (err) {
      sendCookie(res, "accessToken", null, 0);
      sendCookie(res, "refreshToken", null, 0);
      return {
        req,
        res,
        user: null,
      };
    }
  }

  console.log(chalk.yellowBright("[AUTH]: no tokens found 🔒"));

  return {
    req,
    res,
    user: null,
  };
};

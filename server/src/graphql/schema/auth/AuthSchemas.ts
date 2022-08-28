import { Field, ObjectType, ID, InputType } from "type-graphql";
@ObjectType({ description: "Register User Response" })
class RegisterUserResponse {
  @Field(() => ID)
  _id: string;
  @Field(() => Boolean)
  registerSuccess: boolean;
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
}

@InputType({ description: "Register User Input" })
class RegisterUserInput {
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field()
  avatarImg: string;
  @Field()
  handle: string;
}

@InputType({ description: "Login User Input" })
class LoginUserInput {
  @Field()
  email: string;
  @Field()
  password: string;
}

@ObjectType({ description: "Login User Response" })
class LoginUserResponse {
  @Field(() => ID)
  _id: string;
  @Field(() => Boolean)
  loginSuccess: boolean;
  @Field()
  accessToken: string;
  @Field()
  refreshToken: string;
}

@ObjectType({ description: "Logout User Response" })
class LogoutResponse {
  @Field(() => ID)
  _id: string;
  @Field(() => Boolean)
  logoutSuccess: boolean;
  @Field(() => String, { nullable: true })
  accessToken: null;
  @Field(() => String, { nullable: true })
  refreshToken: null;
  @Field()
  message: string;
}

@ObjectType({ description: "Restore Session Response" })
class RestoreSessionResponse {
  @Field(() => ID)
  _id: string;
  @Field(() => Boolean)
  sessionRestored: boolean;
  @Field()
  name: string;
  @Field()
  email: string;
  @Field()
  role: string;
  @Field()
  avatarImg: string;
  @Field()
  handle: string;
}

export {
  RegisterUserInput,
  RegisterUserResponse,
  LoginUserResponse,
  LoginUserInput,
  LogoutResponse,
  RestoreSessionResponse,
};

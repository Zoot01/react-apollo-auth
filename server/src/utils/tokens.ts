import jwt, { JwtPayload } from "jsonwebtoken";
import { IUser } from "../models/UserModel";

export interface IJWTInput extends IUser {}

export interface IJwtValidResponse extends JwtPayload {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  avatarImg: string;
  handle: string;
  refreshTokenCount: number;
}

export const signAccessToken = (
  payload: IJWTInput | IJwtValidResponse
): string => {
  return jwt.sign(
    {
      _id: payload._id,
      name: payload.name,
      email: payload.email,
      role: payload.role,
      avatarImg: payload.avatarImg,
      handle: payload.handle,
      refreshTokenCount: payload.refreshTokenCount,
    },
    process.env.JWT_ACCESS_SECRET as string,
    {
      expiresIn: "35s",
    }
  );
};

export const signRefreshToken = (
  payload: IJWTInput | IJwtValidResponse
): string => {
  return jwt.sign(
    {
      _id: payload._id,
      name: payload.name,
      email: payload.email,
      role: payload.role,
      avatarImg: payload.avatarImg,
      handle: payload.handle,
      refreshTokenCount: payload.refreshTokenCount,
    },
    process.env.JWT_ACCESS_SECRET as string,
    {
      expiresIn: "7d",
    }
  );
};

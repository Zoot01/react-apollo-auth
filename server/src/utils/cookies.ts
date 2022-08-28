import { Response } from "express";
import { IServerContext } from "../types/context";

export const sendCookie = (
  res: Response,
  cookieName: string,
  cookiePayload: string | null,
  maxAge: number
): Response => {
  return res.cookie(cookieName, cookiePayload, {
    maxAge,
    secure: true,
    httpOnly: true,
    sameSite: "none",
  });
};

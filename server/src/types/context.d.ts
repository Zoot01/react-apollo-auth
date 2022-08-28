import { Context } from "apollo-server-core";
import { ExpressContext } from "apollo-server-express";
import { Request, Response } from "express";
import { IUser } from "../models/UserModel";

export interface IServerContext extends Context {
  req: Request;
  res: Response;
  user: IUser | null;
}

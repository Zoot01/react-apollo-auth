import { Schema, Document, model, Model } from "mongoose";

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: "user" | "admin";
  avatarImg: string;
  handle: string;
  refreshTokenCount: number;
}

const UserSchema: Schema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      default: "user",
      enum: ["user", "admin"],
    },
    avatarImg: {
      type: String,
      required: true,
    },
    handle: {
      type: String,
      required: true,
    },
    refreshTokenCount: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  { timestamps: true }
);
export default model<IUser>("User", UserSchema);

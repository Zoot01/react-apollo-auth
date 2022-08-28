import { gql } from "@apollo/client";

export const RestoreSession = gql`
  query RestoreSession {
    RestoreSession {
      _id
      sessionRestored
      name
      email
      role
      avatarImg
      handle
    }
  }
`;

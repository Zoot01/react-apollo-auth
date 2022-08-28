import { gql } from "@apollo/client";

export const LogoutUser = gql`
  mutation LogoutUser {
    LogoutUser {
      _id
      logoutSuccess
      accessToken
      refreshToken
      message
    }
  }
`;

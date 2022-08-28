import { gql } from "@apollo/client";

export const LoginUserMutation = gql`
  mutation LoginUser($loginUserInput: LoginUserInput) {
    LoginUser(loginUserInput: $loginUserInput) {
      _id
      loginSuccess
      accessToken
      refreshToken
    }
  }
`;

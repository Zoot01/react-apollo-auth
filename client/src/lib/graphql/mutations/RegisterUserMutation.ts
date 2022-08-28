import { gql } from "@apollo/client";

const RegisterUser = gql`
  mutation RegisterUser($registerUserInput: RegisterUserInput) {
    RegisterUser(registerUserInput: $registerUserInput) {
      _id
      accessToken
      refreshToken
      registerSuccess
    }
  }
`;

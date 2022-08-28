import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

/** Login User Input */
export type LoginUserInput = {
  email?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Login User Response */
export type LoginUserResponse = {
  __typename?: 'LoginUserResponse';
  _id?: Maybe<Scalars['ID']>;
  accessToken?: Maybe<Scalars['String']>;
  loginSuccess?: Maybe<Scalars['Boolean']>;
  refreshToken?: Maybe<Scalars['String']>;
};

/** Logout User Response */
export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  _id?: Maybe<Scalars['ID']>;
  accessToken?: Maybe<Scalars['String']>;
  logoutSuccess?: Maybe<Scalars['Boolean']>;
  message?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  LoginUser?: Maybe<LoginUserResponse>;
  LogoutUser?: Maybe<LogoutResponse>;
  RegisterUser?: Maybe<RegisterUserResponse>;
};


export type MutationLoginUserArgs = {
  loginUserInput?: InputMaybe<LoginUserInput>;
};


export type MutationRegisterUserArgs = {
  registerUserInput?: InputMaybe<RegisterUserInput>;
};

export type Query = {
  __typename?: 'Query';
  HelloWorld?: Maybe<Scalars['String']>;
  RestoreSession?: Maybe<RestoreSessionResponse>;
};

/** Register User Input */
export type RegisterUserInput = {
  avatarImg?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  handle?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

/** Register User Response */
export type RegisterUserResponse = {
  __typename?: 'RegisterUserResponse';
  _id?: Maybe<Scalars['ID']>;
  accessToken?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  registerSuccess?: Maybe<Scalars['Boolean']>;
};

/** Restore Session Response */
export type RestoreSessionResponse = {
  __typename?: 'RestoreSessionResponse';
  _id?: Maybe<Scalars['ID']>;
  avatarImg?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  handle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
  sessionRestored?: Maybe<Scalars['Boolean']>;
};

export type LoginUserMutationVariables = Exact<{
  loginUserInput?: InputMaybe<LoginUserInput>;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', LoginUser?: { __typename?: 'LoginUserResponse', _id?: string | null, loginSuccess?: boolean | null, accessToken?: string | null, refreshToken?: string | null } | null };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', LogoutUser?: { __typename?: 'LogoutResponse', _id?: string | null, logoutSuccess?: boolean | null, accessToken?: string | null, refreshToken?: string | null, message?: string | null } | null };

export type RegisterUserMutationVariables = Exact<{
  registerUserInput?: InputMaybe<RegisterUserInput>;
}>;


export type RegisterUserMutation = { __typename?: 'Mutation', RegisterUser?: { __typename?: 'RegisterUserResponse', _id?: string | null, accessToken?: string | null, refreshToken?: string | null, registerSuccess?: boolean | null } | null };

export type HelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloWorldQuery = { __typename?: 'Query', HelloWorld?: string | null };

export type RestoreSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type RestoreSessionQuery = { __typename?: 'Query', RestoreSession?: { __typename?: 'RestoreSessionResponse', _id?: string | null, sessionRestored?: boolean | null, name?: string | null, email?: string | null, role?: string | null, avatarImg?: string | null, handle?: string | null } | null };


export const LoginUserDocument = gql`
    mutation LoginUser($loginUserInput: LoginUserInput) {
  LoginUser(loginUserInput: $loginUserInput) {
    _id
    loginSuccess
    accessToken
    refreshToken
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      loginUserInput: // value for 'loginUserInput'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
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
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const RegisterUserDocument = gql`
    mutation RegisterUser($registerUserInput: RegisterUserInput) {
  RegisterUser(registerUserInput: $registerUserInput) {
    _id
    accessToken
    refreshToken
    registerSuccess
  }
}
    `;
export type RegisterUserMutationFn = Apollo.MutationFunction<RegisterUserMutation, RegisterUserMutationVariables>;

/**
 * __useRegisterUserMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutation, { data, loading, error }] = useRegisterUserMutation({
 *   variables: {
 *      registerUserInput: // value for 'registerUserInput'
 *   },
 * });
 */
export function useRegisterUserMutation(baseOptions?: Apollo.MutationHookOptions<RegisterUserMutation, RegisterUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterUserMutation, RegisterUserMutationVariables>(RegisterUserDocument, options);
      }
export type RegisterUserMutationHookResult = ReturnType<typeof useRegisterUserMutation>;
export type RegisterUserMutationResult = Apollo.MutationResult<RegisterUserMutation>;
export type RegisterUserMutationOptions = Apollo.BaseMutationOptions<RegisterUserMutation, RegisterUserMutationVariables>;
export const HelloWorldDocument = gql`
    query HelloWorld {
  HelloWorld
}
    `;

/**
 * __useHelloWorldQuery__
 *
 * To run a query within a React component, call `useHelloWorldQuery` and pass it any options that fit your needs.
 * When your component renders, `useHelloWorldQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHelloWorldQuery({
 *   variables: {
 *   },
 * });
 */
export function useHelloWorldQuery(baseOptions?: Apollo.QueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
      }
export function useHelloWorldLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HelloWorldQuery, HelloWorldQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, options);
        }
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
export type HelloWorldLazyQueryHookResult = ReturnType<typeof useHelloWorldLazyQuery>;
export type HelloWorldQueryResult = Apollo.QueryResult<HelloWorldQuery, HelloWorldQueryVariables>;
export const RestoreSessionDocument = gql`
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

/**
 * __useRestoreSessionQuery__
 *
 * To run a query within a React component, call `useRestoreSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestoreSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestoreSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useRestoreSessionQuery(baseOptions?: Apollo.QueryHookOptions<RestoreSessionQuery, RestoreSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RestoreSessionQuery, RestoreSessionQueryVariables>(RestoreSessionDocument, options);
      }
export function useRestoreSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RestoreSessionQuery, RestoreSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RestoreSessionQuery, RestoreSessionQueryVariables>(RestoreSessionDocument, options);
        }
export type RestoreSessionQueryHookResult = ReturnType<typeof useRestoreSessionQuery>;
export type RestoreSessionLazyQueryHookResult = ReturnType<typeof useRestoreSessionLazyQuery>;
export type RestoreSessionQueryResult = Apollo.QueryResult<RestoreSessionQuery, RestoreSessionQueryVariables>;
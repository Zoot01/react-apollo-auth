import React, { createContext, ReactNode, useReducer } from "react";

export type InitialStateType = {
  _id: string | null;
  name: string | null;
  email: string | null;
  role: string | null;
  avatarImg: string | null;
  handle: string | null;
};

const initialState: InitialStateType = {
  avatarImg: null,
  email: null,
  handle: null,
  name: null,
  role: null,
  _id: null,
};

// START of actions and payload types

type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Login = "LOGIN_USER",
  Logout = "LOGOUT_USER",
}

type AuthPayload = {
  [Types.Login]: {
    _id: string;
    name: string;
    email: string;
    role: string;
    avatarImg: string;
    handle: string;
  };
  [Types.Logout]: InitialStateType;
};

export type AuthActions = ActionMap<AuthPayload>[keyof ActionMap<AuthPayload>];

// END of actions and payload types

const AuthContext = createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<AuthActions>;
}>({ state: initialState, dispatch: () => null });

const authReducer = (state: InitialStateType, action: AuthActions) => {
  switch (action.type) {
    case Types.Login:
      return {
        _id: action.payload._id,
        name: action.payload.name,
        email: action.payload.email,
        role: action.payload.role,
        avatarImg: action.payload.avatarImg,
        handle: action.payload.handle,
      };
    case Types.Logout:
      return initialState;
    default:
      return state;
  }
};

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };

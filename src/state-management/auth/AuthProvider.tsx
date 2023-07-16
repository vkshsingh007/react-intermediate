import React, { ReactNode, useReducer } from "react";

import AuthContext from "./authContext";

interface LoginAction {
  type: "LOGIN";
  username: string;
}

interface LogoutAction {
  type: "LOGOUT";
}

export type AuthAction = LoginAction | LogoutAction;

const LoginReducer = (state: string, action: AuthAction): string => {
  if (action.type === "LOGIN") return action.username;
  if (action.type === "LOGOUT") return "";
  return state;
};

interface Props {
  children: ReactNode;
}
export const AuthProvider = ({ children }: Props) => {
  const [user, dispatch] = useReducer(LoginReducer, "");
  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

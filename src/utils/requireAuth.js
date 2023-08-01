import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequireAuth = ({ children }) => {
  const { isSignIn } = useContext(AuthContext);
  return <> {isSignIn ? children : <Navigate to="/signin" />} </>;
};

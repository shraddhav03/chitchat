import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axios } from "axios";
import { faLitecoinSign } from "@fortawesome/free-solid-svg-icons";

export const authContext = createContext();

export const authProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const userSignIn = async (credentials) => {
    try {
      const {
        status,
        data: { foundUser, encodedUser },
      } = await axios.post("api/auth/login", credentials);
      if (status === 200) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("token", JSON.stringify(encodedUser));
        setUser(foundUser);
        setIsSignIn(true);
        navigate("/Home");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const userSignUp = async (signUpDetails, navigate) => {
    try {
      const { name, username, email, password, confirmPassword } =
        signUpDetails;
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("api/auth/signUp", {
        name,
        username,
        email,
        password,
        confirmPassword,
      });
      if (status === 201) {
        localStorage.setItem("user", JSON.stringify(createdUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        setUser(createdUser);
        setIsSignIn(true);
        navigate("/home");
      }
    } catch (e) {
      console.lerror;
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("guestUser");
    navigate("/");
    setUser({});
    setIsSignIn(false);
  };

  return (
    <authContext.Provider
      value={{
        user,
        signOut,
        setUser,
        isSignIn,
        userSignIn,
        userSignUp,
        editUserModal,
        setEditUserModal,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

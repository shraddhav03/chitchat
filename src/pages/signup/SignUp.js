import "./SignUp.css";

import { useState, useContext } from "react";

import { NavLink, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../context/AuthContext";
// import { FillDetails, PasswordNotMached } from "../../ToastUtils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export const SignUp = () => {
//   const { userSignUp } = useContext(AuthContext);
  const [isDisable, setIsDisable] = useState(true);

  const [signupDetails, setSignUpDetails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

//   const handleBtn = () => {
//     setIsDisable((pre) => !pre);
//   };

//   const signUpHandler = (e) => {
//     e.preventDefault();
//     if (
//       signupDetails.name.trim() === "" ||
//       signupDetails.username.trim() === "" ||
//       signupDetails.email.trim() === "" ||
//       signupDetails.password.trim() === "" ||
//       signupDetails.confirmPassword.trim() === ""
//     ) {
//       FillDetails();
//     } else if (signupDetails.password !== signupDetails.confirmPassword) {
//       PasswordNotMached();
//     } else {
//       userSignUp(signupDetails, navigate);
//     }
//   };

  return (
    <div className="signup-parent-div">
      <NavLink className="signin-page-link" to="/">
        {" "}
        <h1 style={{ marginTop: "0" }}> ChitChat </h1>{" "}
      </NavLink>
      <div className="signup-container">
        <h2>
          <FontAwesomeIcon icon={faRightToBracket} /> Sign Up
        </h2>

        <div className="signup-div">
          <p>Full Name</p>
          <input
            // onChange={(e) =>
            //   setSignUpDetails({ ...signupDetails, name: e.target.value })
            // }
            placeholder="stardust"
            className="signup-input"
            type="text"
          />
        </div>

        <div className="signup-div">
          <p>Username</p>
          <input
            // onChange={(e) =>
            //   setSignUpDetails({ ...signupDetails, username: e.target.value })
            // }
            placeholder="stardust"
            className="signup-input"
            type="text"
          />
        </div>

        <div className="signup-div">
          <p>Email Address</p>
          <input
            // onChange={(e) =>
            //   setSignUpDetails({ ...signupDetails, email: e.target.value })
            // }
            placeholder="freebird@chitchat.com"
            className="signup-input"
            type="email"
          />
        </div>

        <div className="signup-div">
          <p> Password </p>
          <input
            // onChange={(e) =>
            //   setSignUpDetails({ ...signupDetails, password: e.target.value })
            // }
            placeholder="***********"
            className="signup-input"
            type="password"
          />
        </div>

        <div className="signup-div">
          <p>Confirm Password</p>
          <input
            // onChange={(e) =>
            //   setSignUpDetails({
            //     ...signupDetails,
            //     confirmPassword: e.target.value,
            //   })
            // }
            placeholder="***********"
            className="signup-input"
            type="password"
          />
        </div>

        <div className="signup-checkbox-div">
          <input type="checkbox" 
        //   onClick={handleBtn} 
          />
          <p> I accept all Terms & Conditions</p>
        </div>

        <button
          disabled={isDisable}
        //   onClick={signUpHandler}
          className="signup-btn"
        >
          Create New Account
        </button>
        <NavLink className="signup-page-link" to="/signin">
          <p> Already have an Account </p>
        </NavLink>
      </div>
    </div>
  );
};
import './Landing.css'

import { NavLink, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../context/AuthContext";

export const Landing = () => {
//   const { userSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGuest = () => {
    const credential = {
      username: "adarshbalika",
      password: "adarshBalika123",
    };
    // userSignIn(credential, navigate);
  };

  return (
    <div className="landing-parent-div">
      <img src="welcome.svg" alt="landing" />
      <div className="landing-container">
        <h1 className="landing-heading">Welcome to ChitChat</h1>

        <h1>
          FOLLOW{" "}
          <span className="landing-sub-title"> PEOPLE AROUND THE GLOBE </span>
        </h1>
        <h1>
          CONNECT <span className="landing-sub-title">WITH YOUR FRIENDS</span>
        </h1>
        <h1>
          SHARE <span className="landing-sub-title">WHAT'S IN YOUR MIND</span>
        </h1>

        <div className="landing-btn-div">
          <NavLink to="/signup">
            <button className="landing-btn"> Join Now</button>
          </NavLink>
          <NavLink className="landing-signin-link" to="/signin">
            <p>Already have an account? </p>
          </NavLink>
          <p
            style={{ lineHeight: 0, marginTop: 0 }}
            className="guest"
            onClick={handleGuest}
          >
            Sign In as Guest
          </p>
        </div>
      </div>
    </div>
  );
};
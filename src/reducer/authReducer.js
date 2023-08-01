export const authReducer = (authstate, action) => {
  switch (action.type) {
    case "":
      return { ...authstate, isSignIn: action.payload };
    case "USER_SIGNIN":
      return { ...authstate, signInDetails: action.payload };
    case "USER_SIGNUP":
      return { ...authstate, signUpDetails: action.payload };
    default: {
      return authstate;
    }
  }
};

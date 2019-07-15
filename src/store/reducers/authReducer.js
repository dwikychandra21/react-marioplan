const initialState = {
  authenticated: false,
  errorAuth: null
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("Login Success", action.res);
      return {
        ...state,
        errorAuth: null,
        authenticated: true,
      };
    case "LOGIN_FAILED":
      console.log(action.err);
      return {
        ...state,
        errorAuth: "Login Failed",
        authenticated: false
      };
      case "LOGOUT_START":
      console.log("logout start");
      return {
        ...state,
        authenticated: false,
      };
    case "LOGOUT_SUCCESS":
      console.log("logout success");
      return {
        state
      };
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authenticated: true
      };
    case "SIGNUP_FAILED":
      console.log("signup failed", action.err);
      return {
        ...state,
        authenticated: false
      };
    default:
      return state;
  }
};

export default authReducer;

const initialState = {
  error: null
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_READ_NOTIF_SUCCESS":
      console.log("SET_READ_NOTIF_SUCCESS");
      return {
        state
      };
    case "SET_READ_NOTIF_FAILED":
      console.log("SET_READ_NOTIF_FAILED", action.err);
      return {
        error: action.err
      };
    default:
        return state  
  }
};

export default notificationReducer;
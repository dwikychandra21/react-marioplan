const initialState = {};

const projectReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
        console.log(action.project);
       return state;
    default:
      return state;
  }
};

export default projectReducer;

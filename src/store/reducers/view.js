const initialState = "";

const view = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return state = {...state, view: action.view}
    default:
      return state;
  }
};

export default view;

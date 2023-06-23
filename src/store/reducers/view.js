const initialState = "";

export const setView = (text) => {
  return {
    type: "SET_VIEW",
    text,
  };
};

const view = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIEW":
      return (state = action.text);
    default:
      return state;
  }
};

export default view;

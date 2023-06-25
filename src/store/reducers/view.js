const initialState = "";

const SET_VIEW = "SET_VIEW";

export const setView = (payload) => {
  return {
    type: SET_VIEW,
    payload,
  };
};

const view = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.payload;
    default:
      return state;
  }
};

export default view;

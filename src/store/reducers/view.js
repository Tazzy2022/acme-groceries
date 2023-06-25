const SET_VIEW = "SET_VIEW";
const ERROR = "ERROR";

//don't need a setView action creator b/c they already made one in index.js
export const initialState = "";

export const viewReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case SET_VIEW:
      return action.view;
    default:
      return state;
  }
};

export const getViews = () => {
  return async (dispatch) => {
    try {
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
    }
  };
};

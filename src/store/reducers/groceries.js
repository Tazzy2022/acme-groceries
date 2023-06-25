// groceries=
// id:
// type:
// view: 'selected', 'needs', 'purchased'

const initialState = [];

const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";
const ERROR = "ERROR";

export const loadGroceries = (groceries) => {
  return {
    type: LOAD,
    groceries,
  };
};

export const createGrocery = (grocery) => {
  return {
    type: CREATE,
    id: nextId++,
    grocery,
  };
};

export const updateGroceries = (id) => {
  return {
    type: UPDATE,
    id,
  };
};

export const getInitialData = () => {
  return async (dispatch) => {
    try {
      const groceries = (await axios.get("/api/groceries")).data;
      dispatch(loadGroceries(groceries));
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
    }
  };
};

const groceries = (state = initialState, action) => {
  switch (action.type) {
    case LOAD:
      return action.groceries;
    case CREATE:
      return [...state, action.grocery];
    case UPDATE:
      return state.map((grocery) =>
        grocery.id === action.grocery.id ? action.grocery : grocery
      );
    default:
      return state;
  }
};

export default groceries;

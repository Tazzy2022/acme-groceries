import { SET_VIEW } from "./actions";

// groceries=
// id:
// type:
// view: 'selected', 'needs', 'purchased'

const initialState = [];

const LOAD = "LOAD";
const CREATE = "CREATE";
const UPDATE = "UPDATE";

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

//previosuly we did create (addgrocery) like:
// const newGrocery = {
// 	id: action.id,
// 	text: action.text,
// };
//why different now?

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

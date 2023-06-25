import axios from "axios";
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

//thunk to grab all initial data (in index.js)
export const getInitialData = () => {
  return async (dispatch) => {
    try {
      const groceries = (await axios.get("/api/groceries")).data;
      dispatch({
        type: LOAD,
        groceries,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
    }
  };
};

//thunk to create named grocery (in CreateForm)
export const createNamedGrocery = (name) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("/api/groceries", { name });
      dispatch({
        type: CREATE,
        grocery: res.data,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
    }
  };
};

//thunk to create random grocery (in Grocery)
export const createRandomGrocery = () => {
  return async (dispatch) => {
    try {
      const updated = (await axios.put(`/api/groceries/${grocery.id}`, { purchased: !grocery.purchased })).data;
      dispatch({
        type: 'UPDATE',
        grocery: updated
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
    }
  }
}

export const toggle = (grocery) => {
  return async (dispatch) => {
    try {
      const updated = (
        await axios.put(`/api/groceries/${grocery.id}`, {
          purchased: !grocery.purchased,
        })
      ).data;
      dispatch({
        type: "UPDATE",
        grocery: updated
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        error: error.message,
      });
    }
  }
}

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

const initialState = [];

export const loadGroceries = (payload) => {
  return {
    type: "LOAD",
    payload,
  };
};

export const updateGroceries = (id) => {
  return {
    type: "UPDATE",
    id,
  };
};

export const addGrocery = (text) => {
  return {
    type: "CREATE",
    id: nextId++,
    text,
  };
};

const groceries = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD":
      return action.payload;
    case "UPDATE":
      return state.map((grocery) =>
        grocery.id === action.grocery.id ? action.grocery : grocery
      );
    case "CREATE":
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false,
      };
      return [...state, newGrocery];
    default:
      return state;
  }
};

export default groceries;

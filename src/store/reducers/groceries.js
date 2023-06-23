const initialState = [];

const groceries = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD":
      return (state = { ...state, groceries: action.groceries });
    case "UPDATE":
      return (state = {
        ...state,
        groceries: state.groceries.map((grocery) =>
          grocery.id === action.grocery.id ? action.grocery : grocery
        ),
      });
    case "CREATE":
      return (state = {
        ...state,
        groceries: [...state.groceries, action.grocery],
      });
    default:
      return state;
  }
};

export default groceries;

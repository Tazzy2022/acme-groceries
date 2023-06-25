import React from "react";
import { connect } from "react-redux";
import { createRandomGrocery, toggle } from "./store/reducers/groceries";

const _Groceries = ({ groceries, view, toggle, createRandomGrocery }) => {
  return (
    <div>
      <button onClick={createRandomGrocery}>Create</button>
      <ul>
        {groceries
          .filter(
            (grocery) =>
              !view ||
              (grocery.purchased && view === "purchased") ||
              (!grocery.purchased && view === "needs")
          )
          .map((grocery) => {
            return (
              <li
                onClick={() => toggle(grocery)}
                key={grocery.id}
                className={grocery.purchased ? "purchased" : ""}
              >
                {grocery.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (grocery) => dispatch(toggle(grocery)),
    createRandomGrocery: () => dispatch(createRandomGrocery()),
  };
};

const Groceries = connect((state) => state, mapDispatchToProps)(_Groceries);

export default Groceries;

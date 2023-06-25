import React, { Component } from "react";
import { connect } from "react-redux";
import { createNamedGrocery } from "./store/reducers/groceries";

class CreateForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
  }
  render() {
    const { name } = this.state;
    return (
      <form>
        <input
          value={name}
          onChange={(ev) => this.setState({ name: ev.target.value })}
        />
        <button onClick={() => this.props.createNamedGrocery(this.state.name)}>
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createNamedGrocery: (name) => dispatch(createNamedGrocery(name)),
  };
};

export default connect(null, mapDispatchToProps)(CreateForm);

import React, { Component } from "react";

export default class AddItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
  }
  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  render() {
    return (
      <div>
        <h2>AddItems</h2>
        <input onChange={this.handleChange} value={this.state.input} />
        <button
          onClick={() => {
            this.props.handleItem(this.state.input);
            this.setState({ input: "" });
          }}
        >
          add
        </button>
      </div>
    );
  }
}

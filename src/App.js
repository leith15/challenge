import React, { Component } from "react";
import AddItems from "./component/additems/AddItems";
import ListItems from "./component/listitems/ListItems";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: ["task1", "taks2"],
    };
  }
  handleItem = (item) => {
    this.setState({ listItems: [...this.state.listItems, item] });
  };

  handleDelte = (indice) => {
    this.setState({
      listItems: this.state.listItems.filter((el, i) => i != indice),
    });
  };

  render() {
    return (
      <div>
        <h1>APP</h1>
        <AddItems handleItem={this.handleItem} />
        <ListItems
          listItems={this.state.listItems}
          handleDelete={this.handleDelte}
        />
      </div>
    );
  }
}

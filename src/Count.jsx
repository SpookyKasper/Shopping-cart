import { Component } from "react";
import React from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <h1>{this.props.count}</h1>;
  }
}

export default Count;

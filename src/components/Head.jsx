import React, { Component } from 'react';
import Btn from './parts/Btn';
export default class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.setState((previousState) => {
      return {
        count: previousState + 1,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Hello there {this.props.name}</h1>
        <h3>{this.state.count}</h3>
        <Btn />
      </div>
    );
  }
}

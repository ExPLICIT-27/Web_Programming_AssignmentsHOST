import React, { Component } from "react";
class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { index: 0, arr: [1, 2, 3, 4, 5] };
  }
  componentDidMount() {
    console.log("component mounted");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component about to unmount");
  }
  handleChange = () => {
    this.setState({ index: (this.state.index + 1) % this.state.arr.length });
  };
  render() {
    return (
      <div className="ex">
        <span>{this.state.arr[this.state.index]}</span>
        <button onClick={this.handleChange}>change index</button>
      </div>
    );
  }
}
export default Example;

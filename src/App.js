import "./App.css";
import Button from "./components/Button";
import React, { Component } from "react";
import Input from "./components/input";
import clear from "./components/Clear";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentNumber: "",
      operator: "",
    };
  }

  addInput = (val) => {
    this.setState({ input: this.state.input + val });
  };

  addDecimal = (val) => {
    // only add decimal if there is no current decimal point present in the input area
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };

  addZeroToInput = (val) => {
    // if this.state.input is not empty then add zero
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };

  clearInput = () => {
    this.setState({ input: "" });
  };

  add = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "+",
    });
  };

  subtract = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "-",
    });
  };

  multiply = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "*",
    });
  };

  percentage = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "%",
    });
  };

  divide = () => {
    this.setState({
      previousNumber: this.state.input,
      input: "",
      operator: "/",
    });
  };

  calculate = () => {
    let result = 0;

    if (this.state.operator === "plus") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) +
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "subtract") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) -
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "multiply") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) *
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "divide") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber) /
          parseFloat(this.state.currentNumber),
      });
    } else if (this.state.operator === "percentage") {
      this.setState({
        input:
          parseFloat(this.state.previousNumber / (100))  *
          parseFloat(this.state.currentNumber),
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="row">
            <Input>{this.state.input}</Input>
          </div>
          <div className="row">
            <Button handleClick={this.subtract}>-</Button>
            <Button handleClick={this.add}>+</Button>
            <Button handleClick={this.multiply}>*</Button>
            <Button handleClick={this.divide}>/</Button>
            <Button handleClick={this.percentage}>%</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addInput}>6</Button>
            <Button handleClick={this.addInput}>7</Button>
            <Button handleClick={this.addInput}>8</Button>
            <Button handleClick={this.addInput}>9</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addInput}>2</Button>
            <Button handleClick={this.addInput}>3</Button>
            <Button handleClick={this.addInput}>4</Button>
            <Button handleClick={this.addInput}>5</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addInput}>1</Button>
            <Button handleClick={this.addZeroToInput}>0</Button>
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.calculate}>=</Button>
          </div>
          <div className="row">
            <Button handleClick={this.clearInput}>clear</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

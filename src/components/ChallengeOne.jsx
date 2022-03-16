import React, { Component } from "react";
//import images
import imageLeft from "../assets/look-left.jpeg";
import imageRight from "../assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  constructor(props) {
    super(props);

    this.state = { currentState: false };
  }

  //click left/right button handler goes here
  leftButtonHandler = () => {
    this.setState({ currentState: false });
  };

  rightButtonHandler = () => {
    this.setState({ currentState: true });
  };

  render() {
    return (
      <>
        <h2>Challenge 1</h2>
        <div className="msg">
          {this.state.currentState === false ? (
            <img className="ch1" src={imageLeft} alt="left" />
          ) : (
            <img className="ch1" src={imageRight} alt="right" />
          )}
        </div>
        <button onClick={this.leftButtonHandler} className="btn">
          ⭠
        </button>
        <button onClick={this.rightButtonHandler} className="btn">
          ⭢
        </button>
      </>
    );
  }
}

export default ChallengeOne;

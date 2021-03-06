import React, { Component } from "react";
import ChallengeOne from "./components/ChallengeOne";
import ChallengeTwo from "./components/ChallengeTwo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Lab 101</h1>
        <ChallengeOne />
        <ChallengeTwo />
        {/* Import Components (ChallengeOne and Challenge Two) here */}
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  constructor(props) {
    super(props);

    this.state = { studentList: [] };
  }

  //a lifecycle method will execute when the page has loaded (this will only run once)
  componentDidMount() {
    this.setState({ studentList });
  }

  //random button handler
  randomize = () => {
    let newStudentList = studentList;
    let i = newStudentList.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = newStudentList[i];
      newStudentList[i] = newStudentList[j];
      newStudentList[j] = temp;
    }
    console.log(newStudentList);

    this.setState({ studentList: newStudentList });

    // this.setState({ studentList: this.state.studentList });
    //shuffle the array and set the state
  };

  render() {
    return (
      <>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {this.state.studentList.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
        <button onClick={this.randomize} className="btn large">
          {/* <button className="btn large"> */}
          Randomize
        </button>
      </>
    );
  }
}

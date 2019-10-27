import React, { Component } from "react";
//Third party imports
import Wrapper from "./components/Wrapper";
// import FriendCard from "./components/FriendCard";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.js";

//Declare variables to correctGuesses, bestScore and clickMessage
let correctGuesses = 0;
let bestScore = 0;
let clickMessage =
  "Click on a picture to gain points! Click on the same on twice and you lose the game.";

class App extends Component {
  //Setting this.state matches to the matches json array
  state = {
    friends,
    correctGuesses,
    bestScore,
    clickMessage
  };

  render() {
    return (
      <Wrapper>
        <Title>Nickelodeon Clicky Game</Title>

        <h3 className="scoreSummary">{this.state.clickMessage}</h3>
      </Wrapper>
    );
  }
}

export default App;

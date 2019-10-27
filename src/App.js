import React, { Component } from "react";
//Third party imports
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
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

  //set a click listener that passes in an id that will change the state of the image to "true"
  setClicked = id => {
    //make a copy of the state matches array to work with
    const matches = this.state.friends;
    console.log(`Matches: ${matches}`);

    //Filter for the clicked match
    const clickedMatch = matches.filter(match => match.id === id);
    console.log(`Clicked Matched: ${clickedMatch}`);
    //If the matched image's clicked value is already true, results in game over actions

    //if clickedMatch = clicked "true" game will score will go to 0 and  a message will read " You already clicked on this one" . Images will re-render and set clicked to false
    if (clickedMatch[0].clicked) {
      console.log("Correct Guesses: " + correctGuesses);

      correctGuesses = 0;
      clickMessage = "You already clicked this one.";

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }
      this.setState({ clickMessage });
      this.setState({ correctGuesses });
      this.setState({ matches });
      console.log(
        `Message: ${clickMessage} Correct Guesses: ${correctGuesses} Matches: ${matches}`
      );

      //if image clicked = false and user hasn't finished
    } else if (correctGuesses < 11) {
      //set it's value to true
      clickedMatch[0].clicked = true;
      //increment counter
      correctGuesses++;

      clickMessage = "Keep going!";

      //If correctGuess is greater than bestScore; bestScore will be set to correctGuesses number
      if (correctGuesses > bestScore) {
        bestScore = correctGuesses;
        this.setState({ bestScore });
      }

      //Shuffle the array to be rendered in a random order
      matches.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      //Set this state.matches equal to the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    } else {
      //Set it value to true
      clickedMatch[0].clicked = true;

      //Restart the guess counter
      correctGuesses = 0;

      clickMessage = "Let's see if you can do it again!";
      bestScore = 12;
      this.setState({ bestScore });

      for (let i = 0; i < matches.length; i++) {
        matches[i].clicked = false;
      }

      //shuffle the array to be rendered in a randon order
      matches.sort(function(a, b) {
        return 0.5 - Math.random();
      });

      //Set this.state.matches equal the new matches array
      this.setState({ matches });
      this.setState({ correctGuesses });
      this.setState({ clickMessage });
    }
  };

  render() {
    return (
      <Wrapper>
        <Title>Nickelodeon Clicky Game</Title>
        {/* This is the Score Card  */}
        <h3 className="scoreSummary">{this.state.clickMessage}</h3>
        <h3 className="scoreSummary card-header">
          Correct Gusses: {this.state.correctGuesses}
          <br />
          Best Score: {this.state.bestScore}
        </h3>
        {/* Container for game */}
        <div className="container">
          <div className="row">
            {this.state.friends.map(match => (
              <FriendCard
                setClicked={this.setClicked}
                id={match.id}
                key={match.id}
                image={match.image}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default App;

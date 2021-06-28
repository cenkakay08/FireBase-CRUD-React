import "../assets/css/GuessGamePage.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState, useEffect } from "react";
import RandomNumber from "../javaScripts/RandomNumber";
import CheckTheResult from "../javaScripts/CheckTheResult";

const AlertCheck = (ReturnedResult, RandomNumber) => {
  if (ReturnedResult === "+4") {
    alert("Congratulations! The answer is: " + RandomNumber.toString());
  }
};

const GuessGamePage = () => {
  const [randomNumber, setRandomNumber] = useState(() => RandomNumber());
  const [counter, setCounter] = useState(0);
  const [result, setResult] = useState("");

  const check = (userNumber) => {
    setCounter(counter + 1);
    setResult(CheckTheResult(userNumber, randomNumber));
  };
  const NewGameSetting = () => {
    setCounter(0);
    setResult("");
    document.getElementById("UserInput").value = "";
  };

  useEffect(() => {
    AlertCheck(result, randomNumber);
  }, [result]);
  useEffect(() => {
    NewGameSetting();
  }, [randomNumber]);

  return (
    <div class="GuessGame">
      <div>
        <h2>Guess the Number With Four Digits</h2>
      </div>
      <br />
      <div class="ShowForm">
        Type your guess:
        <br />
        <Form.Group>
          <Form.Control
            id="UserInput"
            type="text"
            pattern="[0-9]*"
            maxLength="4"
            placeholder="Enter 4 digit number"
          />
        </Form.Group>
      </div>
      <div class="PredicText">Number of Predictions: {counter}</div>
      <div class="PredicText">Result: {result}</div>
      <div class="GuessEvent">
        <Button
          type="button"
          id="GuessEvent"
          onClick={() => {
            check(document.getElementById("UserInput").value);
          }}
        >
          Check!
        </Button>
      </div>
      <div class="GuessEvent">
        <Button
          type="button"
          id="ReGuessEvent"
          onClick={() => {
            setRandomNumber(() => RandomNumber());
          }}
        >
          Generate New Random Number
        </Button>
      </div>
    </div>
  );
};

export default GuessGamePage;

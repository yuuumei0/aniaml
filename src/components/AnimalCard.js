import React from "react";
import { useState } from "react";
import "./AnimalCard.css";

const AnimalCard = () => {
  const name = "Sparky";
  const [voteCount, setVoteCount] = useState(0);
  const [isFrozen, setIsFrozen] = useState(true); // Returns variable and a function
  //    ^Variable   ^Setter function

  const handleVote = () => {
    if (isFrozen) {
      //start if
      setVoteCount(voteCount + 1);
    } //close if statement
  };

  return (
    <div className="AnimalCard">
      <div className="imageContainer">
        <img src="https://via.placeholder.com/150" />
      </div>
      <div className="cardBody">
        <h2>{name}</h2>
        <h5>Dog - Corgi - Poughkeepsie</h5>
        <p>Major: Molecular Biology</p>
        <p>Minor: Political Science</p>
        <p className="quote">"Eat, Pray, Love" - Elizabeth Gilbert</p>
        <div className="votes">
          <span>
            Current Votes: {voteCount}, Frozen? {isFrozen}
          </span>
        </div>
        <div className="buttons">
          {isFrozen ? (
            ""
          ) : (
            <button className="vote" onClick={handleVote}>
              Vote for {name}
            </button>
          )}
          <button className="freeze" onClick={() => setIsFrozen(!isFrozen)}>
            {isFrozen ? "Freeze" : "Unfreeze"} Voting
          </button>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;

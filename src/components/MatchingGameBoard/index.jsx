import React from "react";

// Matching board has two types. One of them is for words, other one is images.
// Single Matching Game Board which is used for generating board for words or images.
const MatchingGameBoard = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const cardId = e.dataTransfer.getData("cardId");
    const card = document.getElementById(cardId);
    card.style.display = "block";
    e.target.appendChild(card);
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
}

export default MatchingGameBoard;
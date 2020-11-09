import React from "react";

// Matching card has two types. One of them is word card, other one is image card.
// Single Matching Game Card which is used for word cards and image cards.
const MatchingGameCard = (props) => {
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("cardId", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };

  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      id={props.id}
      className={props.className}
      draggable={props.draggable}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};
export default MatchingGameCard;

// manipulates isFlipped and isMatched property of card a state
// cardStateKey example : "isMatched"
// cardStates is an array of objects(states)
// see MemoryGameBoard/index.jsx to for cardStates example and use of this function
// targetCard is an element of cardStates array.
// invertCardStateForKey is called when selectedCards state change.
export const invertCardStateForKey = (
  cardStateKey,
  targetCard,
  cardStates,
  setCardStates
) => {
  const copyOfCardStates = [...cardStates];
  const targetIndex = copyOfCardStates.findIndex(
    (cardState) => cardState.cardKey === targetCard.cardKey
  );
  const targetCardState = copyOfCardStates[targetIndex];
  // isMatched is false as default. When it is true success symbol appears in card
  if (cardStateKey === "isMatched") {
    targetCardState.isMatched = !targetCardState.isMatched;
    setCardStates(() => [...copyOfCardStates]);
  } else if (cardStateKey === "isFlipped") {
    // at this point isFlipped is always true and user failed to match cards.
    // resets it back to false. But gives player time to see failed cards
    setTimeout(() => {
      targetCardState.isFlipped = !targetCardState.isFlipped;
      setCardStates(() => [...copyOfCardStates]);
    }, 750);
  } else {
    throw new Error("Invalid property was passed to invertCardStateForKey");
  }
};

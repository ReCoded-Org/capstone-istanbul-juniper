// manipulates isFlipped and isMatched property of card a state
// property example : "isMatched"
// cardStates is an array of objects(states)
// see src/memorygame/MemoryGameBoard/index.jsx to for cardStates example and use of this function
// targetCard is an element of cardStates array.
// changeCardStatePropertyToOpposite is called when selectedCards state change.
export const changeCardStatePropertyToOpposite = (
  stateProperty,
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
  if (stateProperty === "isMatched") {
    targetCardState.isMatched = !targetCardState.isMatched;
    setCardStates(() => [...copyOfCardStates]);
    // isFlipped is false as default. When it is true backside of card become visible
  } else if (stateProperty === "isFlipped") {
    // at this point isFlipped is always true and user failed to match cards.
    // resets it back to false. But gives player time to see failed cards
    setTimeout(() => {
      targetCardState.isFlipped = !targetCardState.isFlipped;
      setCardStates(() => [...copyOfCardStates]);
    }, 750);
  } else {
    throw new Error(
      "Invalid property was passed to changeCardStatePropertyToOpposite"
    );
  }
};

// Check Fisher–Yates shuffle algorithm https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
// non destructive shuffle
export const shuffle = (arr) => {
  const copyOfArr = [...arr];
  for (let i = copyOfArr.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copyOfArr[i], copyOfArr[j]] = [copyOfArr[j], copyOfArr[i]];
  }
  return copyOfArr;
};

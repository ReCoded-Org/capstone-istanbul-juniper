// manipulates isFlipped and isMatched property of card state
const changeCardStatePropertyToOpposite = (
  property,
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
  if (property === "isMatched") {
    targetCardState.isMatched = !targetCardState.isMatched;
    setCardStates(() => [...copyOfCardStates]);
    // isFlipped is false as default. When it is true backside of card become visible
  } else if (property === "isFlipped") {
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

export default changeCardStatePropertyToOpposite;

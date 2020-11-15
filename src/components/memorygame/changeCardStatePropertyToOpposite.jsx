// manipulates isFlipped and isMatched property of card a state
// property example : "isMatched"
// cardStates is an array of objects(states)
// cardStates example :
// [
//   {
//      cardKey:"",
//      img:{src:"",imgKey:""},
//      isFlipped:false,
//      isMatched:false,
//      description:"",
//      link:"",
//      phrase:""
//   },
// ...]
// targetCard is a state obj.
// Object in line 6-14 is an example for targetCard
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

export default changeCardStatePropertyToOpposite;

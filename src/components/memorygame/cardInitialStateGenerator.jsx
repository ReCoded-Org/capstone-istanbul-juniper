import * as invariant from "invariant";
import CARD_BACKSIDE_IMAGES from "./memoryCardBackSideImages";
import shuffle from "./shuffle";

/**
 * cardDataArr example:
 * [{description:"...",link:"...",phrase:".."},{description:"...",link:"...",phrase:".."},...]
 *
 * CARD_BACKSIDE_IMAGES example:[image1,image2,...]
 *
 * Game example: https://www.brightfocus.org/alzheimers/memory-games/match-pictures
 * Instead of squares this game uses cards.
 *
 * This function prepares the statesArr that sets the structure of game board
 */
const cardInitialStateGenerator = (cardDataArr, numRequiredMatches) => {
  invariant(
    cardDataArr.length === CARD_BACKSIDE_IMAGES.length,
    "'numRequiredMatches' and 'cardDataArr' have different length"
  );
  let clonedCardData = [];
  let clonedImgArr = [];

  // cardDataArr should be cloned to provide "NUM_REQUIRED_MATCHES" amount of match per image
  // clonedImgArr should be cloned to easier image-state matching
  for (let i = 0; i < numRequiredMatches; i += 1) {
    clonedCardData = [...clonedCardData, ...cardDataArr];
    clonedImgArr = [...clonedImgArr, ...CARD_BACKSIDE_IMAGES];
  }

  let cardStates = [];

  clonedCardData.forEach((card, index) => {
    // clonedCardData and clonedImgArr ordered in same way
    // clonedImgArr[0] holds image for clonedCardData[0]
    // clonedImgArr[index] is a directory
    const imgSrc = clonedImgArr[index];
    const imgNameParts = clonedImgArr[index].split("/");
    const lastNamePart = imgNameParts[imgNameParts.length - 1];
    // lastNamePart is something like acidRain.234234
    const imgName = lastNamePart.split(".")[0];
    // unique cardKey and same imgKey are needed for card match condition
    // card keys of matching images should be like "acidRain0", "acidRain1"...
    let cardKey = "";
    // increments number by doing search For example: if there are 3 "acidRain"
    // their cardKeys will be as follows "acidRain0" "acidRain1" "acidRain2"
    const numSameCardKeysSoFar = cardStates.filter(
      (prevCardState) => prevCardState.description === card.description
    ).length;
    cardKey = `${imgName}${numSameCardKeysSoFar}`;
    cardStates = [
      ...cardStates,
      {
        ...card,
        cardKey,
        isFlipped: false,
        isMatched: false,
        img: { src: imgSrc, imgKey: imgName },
      },
    ];
  });

  return shuffle(cardStates);
};

export default cardInitialStateGenerator;

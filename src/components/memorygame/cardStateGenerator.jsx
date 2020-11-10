import * as invariant from "invariant";
import CARD_BACKSIDE_IMAGES from "./memoryCardBackSideImages";
import shuffle from "./shuffle";

/**
 * cardDataArr example:
 * [{description:"...",link:"...",phrase:".."},{description:"...",link:"...",phrase:".."},...]
 *
 * CARD_BACKSIDE_IMAGES example:[image1,image2,...]
 */
const cardInitialStateGenerator = (cardDataArr, NUM_REQUIRED_MATCHES) => {
  invariant(
    cardDataArr.length === CARD_BACKSIDE_IMAGES.length,
    "'CARD_BACKSIDE_IMAGES' and 'cardData' have different length"
  );
  let clonedCardData = [];
  let clonedImgArr = [];

  for (let i = 0; i < NUM_REQUIRED_MATCHES; i++) {
    clonedCardData = [...clonedCardData, ...cardDataArr];
    clonedImgArr = [...clonedImgArr, ...CARD_BACKSIDE_IMAGES];
  }

  return shuffle(
    clonedCardData.map((card, id) => {
      return {
        ...card,
        id,
        img: clonedImgArr[id],
        isFlipped: false,
        isMatched: false,
      };
    })
  );
};

export default cardInitialStateGenerator;

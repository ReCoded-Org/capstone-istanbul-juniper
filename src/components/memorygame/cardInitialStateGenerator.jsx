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
    "'CARD_BACKSIDE_IMAGES' and 'cardDataArr' have different length"
  );
  let clonedCardData = [];
  let clonedImgArr = [];

  for (let i = 0; i < NUM_REQUIRED_MATCHES; i++) {
    clonedCardData = [...clonedCardData, ...cardDataArr];
    clonedImgArr = [...clonedImgArr, ...CARD_BACKSIDE_IMAGES];
  }

  return shuffle(
    clonedCardData.map((card, index) => {
      const imgNameParts = clonedImgArr[index].split("/");
      const lastNamePart = imgNameParts[imgNameParts.length - 1];
      const coreImgName = lastNamePart.split(".")[0];
      let cardKey = card.description;
      if (index > cardDataArr.length - 1) {
        cardKey = `Clone ${card.description}`;
      }
      return {
        ...card,
        cardKey,
        id: index,
        img: { src: clonedImgArr[index], imgKey: coreImgName },
        isFlipped: false,
        isMatched: false,
      };
    })
  );
};

export default cardInitialStateGenerator;

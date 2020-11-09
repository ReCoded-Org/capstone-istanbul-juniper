import React from "react";
import MatchingGameCard from "../MatchingGameCard";
import { useTranslation } from "react-i18next";
import shuffle from "../shuffle.jsx";

const MatchingGameImageCards = () => {
  const [t] = useTranslation();
  const matchingGameCardsData = [
    ...t("games.matchingGame.matchingGameCards", {
      returnObjects: true,
    }),
  ];
  const shuffledMatchingGameCardsData = shuffle(matchingGameCardsData);
  return (
    <>
      {shuffledMatchingGameCardsData.map((card) => (
        <MatchingGameCard
          id="matchingGame__imagesBoard__card"
          className="matchingGame_imagesBoard__card"
        >
          <img alt={card.name} src={card.src} />
          <div></div>
        </MatchingGameCard>
      ))}
    </>
  );
};

export default MatchingGameImageCards;

import React from "react";
import MatchingGameCard from "../MatchingGameCard";
import { useTranslation } from "react-i18next";
import "./index.css";
import shuffle from "../shuffle.jsx";

const MatchingGameWordCards = () => {
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
          id={card.id}
          className="matchingGame__wordsBoard__card"
          draggable="true"
        >
          <span>{card.name}</span>
        </MatchingGameCard>
      ))}
    </>
  );
};

export default MatchingGameWordCards;

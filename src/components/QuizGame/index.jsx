import React, { useState } from "react";
import { fetchQuizQuestions } from "../../components/QuizGameApi";
import QuestionCard from "../../components/QuizGameQuestions";
import "./index.css";

const DIFFICULTY = {
  EASY: "easy",
  MEDIUM: "medium",
  HARD: "hard",
};

const TOTAL_QUESTIONS = 10;

const QuizGame = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [isGameStart, setIsGameStart] = useState(false);

  const startQuiz = async () => {
    setIsLoading(true);
    setIsGameStart(true);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      DIFFICULTY.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setCurrentQuestionNumber(0);
    setIsLoading(false);
  };

  const checkAnswer = (e) => {
    if (isGameStart) {
      const userChosenAnswer = e.currentTarget.value;
      const solutionAnswer = questions[currentQuestionNumber].correct_answer;
      const isCorrect = solutionAnswer === userChosenAnswer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
        const answerObject = {
          question: questions[currentQuestionNumber].question,
          userChosenAnswer: e.currentTarget.value,
          isCorrect: solutionAnswer === userChosenAnswer,
          correctAnswer: questions[currentQuestionNumber].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObject]);
      }
    }
  };

  const nextQuestion = () => {
    const nextQNum = currentQuestionNumber + 1;
    if (nextQNum >= TOTAL_QUESTIONS) {
      // the start button will appear again after the user finish ten questions and of course to start the game.
      setIsGameStart(true);
    } else {
      setCurrentQuestionNumber(nextQNum);
    }
  };

  const shouldStartGameAgain =
    !isGameStart || userAnswers.length === TOTAL_QUESTIONS;
  const isGameReady = isGameStart && !isLoading;
  const isUserOnLastQuestion =
    userAnswers.length === currentQuestionNumber + 1 &&
    currentQuestionNumber !== TOTAL_QUESTIONS - 1;
  const isThereAnotherQuestion = isGameReady && isUserOnLastQuestion;

  return (
    <>
      <div className="quizWrapper">
        <h1 className="quizWrapper__header">Quiz Game</h1>
        {shouldStartGameAgain && (
          <button className="quizWrapper__startGame" onClick={startQuiz}>
            Start
          </button>
        )}
        {isGameStart && <p className="quizWrapper__score">Score: {score}</p>}
        {isLoading && <p>Loading Questions...</p>}
        {isGameReady && (
          <QuestionCard
            questionNum={currentQuestionNumber + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[currentQuestionNumber].question}
            answerChoices={questions[currentQuestionNumber].answers}
            handleClick={checkAnswer}
          />
        )}
        {isThereAnotherQuestion && (
          <button className="quizWrapper__nextButton" onClick={nextQuestion}>
            Next question
          </button>
        )}
      </div>
    </>
  );
};
export default QuizGame;

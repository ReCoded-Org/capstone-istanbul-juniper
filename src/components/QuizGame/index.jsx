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
      const solutionAnswer= e.currentTarget.value;
      const checkCorrectAnswer =
        questions[currentQuestionNumber].correct_answer;
      const isCorrect = checkCorrectAnswer === solutionAnswer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
        const answerObject = {
          question: questions[currentQuestionNumber].question,
          solutionAnswer: e.currentTarget.value,
          isCorrect: checkCorrectAnswer === solutionAnswer,
          correctAnswer: questions[currentQuestionNumber].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObject]);
      }
    }
  };

  const nextQuestion = () => {
    const nextQNum = currentQuestionNumber + 1;
    if (nextQNum >= TOTAL_QUESTIONS) {
      setIsGameStart(true);
    } else {
      setCurrentQuestionNumber(nextQNum);
    }
  };

  const startTheGameAgain =
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
        {startTheGameAgain && (
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

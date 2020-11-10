import React, { useState } from "react";
import { fetchQuizQuestions } from "../../components/QuizGameApi";
import "antd/dist/antd.css";
import QuestionCard from "../../components/QuizGameQuestions";
import "./index.css";
const Difficulty = {
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
  const [isGameOver, setIsGameOver] = useState(true);
  const startQuiz = async () => {
    setIsLoading(true);
    setIsGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setCurrentQuestionNumber(0);
    setIsLoading(false);
  };
  const checkAnswer = (e) => {
    if (!isGameOver) {
      const answer = e.currentTarget.value;
      const isCorrect = questions[currentQuestionNumber].correct_answer === answer;
      if (isCorrect) {
        setScore((prev) => prev + 1);
        const answerObject = {
          question: questions[currentQuestionNumber].question,
          answer,
          isCorrect,
          correctAnswer: questions[currentQuestionNumber].correct_answer,
        };
        setUserAnswers((prev) => [...prev, answerObject]);
      }
    }
  };
  const nextQuestion = () => {
    const nextQ = currentQuestionNumber + 1;
    if (nextQ >= TOTAL_QUESTIONS) {
      setIsGameOver(true);
    } else {
      setCurrentQuestionNumber(nextQ);
    }
  };
  const checkGameOver = isGameOver || userAnswers.length === TOTAL_QUESTIONS;
  return (
    <>
      <div className="quizWrapper__title">
        <h1 className="quizWrapper__header">Quiz Game</h1>
        {checkGameOver ? (
          <button className="quizWrapper__startGame" onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {!isGameOver && <p className="quizWrapper__score">Score: {score}</p>}
        {isLoading && <p>Loading Questions...</p>}
        {!isLoading && !isGameOver && (
          <QuestionCard
            questionNum={questionNumber + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[questionNumber].question}
            answers={questions[questionNumber].answers}
            userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
            callback={checkAnswer}
          />
        )}
        {!isGameOver &&
        !isLoading &&
        userAnswers.length === currentQuestionNumber+ 1 &&
        currentQuestionNumber !== TOTAL_QUESTIONS - 1 ? (
          <button className="quizWrapper__nextButton" onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
    </>
  );
};
export default QuizGame;

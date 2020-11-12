import React, { useState } from "react";
import { fetchQuizQuestions } from "../../components/QuizGameApi";
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
  const [isGameOver, setIsGameOver] = useState(false);
  const [isGameStart,setIsGameStart]=useState(false)
  const startQuiz = async () => {
    setIsLoading(true);
    setIsGameOver(false);
    setIsGameStart(true)
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
    if (!isGameOver && isGameStart) {
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
    const nextQNum = currentQuestionNumber + 1;
    if (nextQNum>= TOTAL_QUESTIONS) {
      setIsGameOver(true);
      setIsGameStart(true)
    } else {
      setCurrentQuestionNumber(nextQNum);
    }
  };
  const  checkToNextQuestion = !isGameOver && isGameStart &&!isLoading && userAnswers.length === currentQuestionNumber+ 1 && currentQuestionNumber !== TOTAL_QUESTIONS - 1 
  return (
    <>
      <div className="quizWrapper">
        <h1 className="quizWrapper__header">Quiz Game</h1>
        {!isGameOver &&(
          <button className="quizWrapper__startGame" onClick={startQuiz}>
            Start
          </button>
        ) }
        {!isGameOver && isGameStart && <p className="quizWrapper__score">Score: {score}</p>}
        {isLoading && <p>Loading Questions...</p>}
        {!isLoading && !isGameOver && isGameStart && (
          <QuestionCard
            questionNum={currentQuestionNumber + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[currentQuestionNumber].question}
            storedQuestionsAnswers={questions[currentQuestionNumber].answers}
            userAnswer={userAnswers ? userAnswers[questionNumber] : undefined}
            callback={checkAnswer}
          />
        )}
        { checkToNextQuestion &&(
          <button className="quizWrapper__nextButton" onClick={nextQuestion}>
            Next Question
          </button>
        ) }
      </div>
    </>
  );
};
export default QuizGame;
import React ,{useState}from 'react'
import {fetchQuizQuestions}from '../../components/QuizGameApi'
import 'antd/dist/antd.css';
import QuestionCard from '../../components/QuizGameQuestions'
import './index.css'

const difficulty ={
  EASY :"easy",
  MEDIUM : "medium",
  HARD :"hard",
}

const TOTAL_QUESTIONS=10;

const  QuizGame = () => {

  const [loading,setLoading]= useState(false)
  const [questions,setQuestions]=useState([])
  const [number,setNumber]=useState(0)
  const [userAnswers,setUserAnswers]= useState([])
  const [score,setScore]=useState(0)
  const [gameOver,setGameOver]=useState(true)
  
  const startQuiz = async ()=>{
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      difficulty.EASY
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

   const checkAnswer = (e)=>{
    if (!gameOver) {
      
      const answer = e.currentTarget.value;
      
      const correct = questions[number].correct_answer === answer;
      
      if (correct) setScore((prev) => prev + 1);
       
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
   }

   const nextQuestion=()=>{
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQ);
    }
   }

  return (
   <>
   
   <div className='gameWrapper'>
  <h1 className='gamerHeader'>Quiz Game</h1>
  {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className='startGame' onClick={startQuiz}>
            Start
          </button>
        ) : null}
        {!gameOver ? <p className='gameScore'>Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !gameOver && (
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
            
          />
        )}
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next Question
          </button>
        ) : null}
      </div>
  </>

  )
}
export default QuizGame;
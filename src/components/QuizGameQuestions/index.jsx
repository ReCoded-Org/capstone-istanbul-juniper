import React from 'react'
import './index.css'

const QuestionCard =({ question,
    answers,
    callback,
    userAnswer,
    questionNr,
    totalQuestions})=>(
    <div className='questionWrapper'>
    <p className='numberOfQyestion'>
      Question: {questionNr} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers.map((answer) => (
        <div
         
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
          
        >
          <button  className='userAnswer' disabled={userAnswer ? true  : false } value={answer} onClick={callback}>
          <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
         
        </div>
      ))}
    </div>
  </div>
)

export default QuestionCard;
import React from "react";
import "./index.css";

// this function will display the fetched data to the dom.those parameters will pass in quizgame component.
// the callback is used to check if the answer is true or not.
// types of props = {
//  question: string
//  storedQuestionsAnswers: string
//  callback: function
//  userAnswer: string 
//  questionNum: number
//  totalQuestions: number
//}

const QuestionCard = ({
  question,
  storedQuestionsAnswers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <div className="quizQuestionWrapper">
    <p className="quizQuestionWrapper__numOfQuizQuestion">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {storedQuestionsAnswers.map((answer) => (
        <div
          key={answer}
          >
          <button
            className="quizQuestionWrapper__userAnswer"
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback} >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);
export default QuestionCard;
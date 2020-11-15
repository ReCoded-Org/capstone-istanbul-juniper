import React from "react";
import "./index.css";

// this function will display the fetched data to the dom.those parameters will pass in quizgame component.
// the callback is used to check if the answer is true or not.
// types of props = {
//  question: string
//  answerChoices: string
//  handleClick: function
//  userAnswer: string
//  questionNum: number
//  totalQuestions: number
//}
const QuestionCard = ({
  question,
  answerChoices,
  handleClick,
  questionNum,
  totalQuestions,
}) => (
  <div className="quizQuestionWrapper">
    <p className="quizQuestionWrapper__numOfQuizQuestion">
      Question: {questionNum} / {totalQuestions}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answerChoices.map((answer) => (
        <div key={answer}>
          <button
            className="quizQuestionWrapper__userAnswer"
            value={answer}
            onClick={handleClick}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </div>
      ))}
    </div>
  </div>
);
export default QuestionCard;

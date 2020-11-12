import React from "react";
import "./index.css";

// this function will display the fetched data to the dom.
const QuestionCard = ({
  question,
  answers,
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
      {answers.map((answer) => (
        <div
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}>
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
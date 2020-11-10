import React from "react";
import "./index.css";
const QuestionCard = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => (
  <div className="quizQuestionWrapper">
    <p className="numberOf__quizQuestion">
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
            className="quiz__userAnswer"
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
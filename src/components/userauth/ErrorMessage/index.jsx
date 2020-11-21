import React from "react";

const ErrorMessage = ({ message }) => {
  if (!message) {
    return null;
  }
  return (
    <div className="loginContainer__loginDialog__errorContainer">{message}</div>
  );
};

export default ErrorMessage;

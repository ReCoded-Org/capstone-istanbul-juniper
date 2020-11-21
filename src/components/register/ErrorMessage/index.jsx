import React from "react";

const ErrorMessage = ({ message }) => {
  if (message) {
    return (
      <div className="loginContainer__loginDialog__errorContainer">
        {errorMessage}
      </div>
    );
  } else return null;
};

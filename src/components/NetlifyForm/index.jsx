/*
 * NetlifyForm component consists of server related functionalities that is used posting data and also avoiding captchas.
 * The base code that is used in both netlifyForm and index are implemented from https://github.com/jon-fm/react-ssg-netlify-forms-demo
 */
import React, { useState, useEffect } from "react";

const NetlifyForm = ({
  formName,
  beforeSubmit, // function which is used in form validation
  afterSubmit,  // function which is used in showing submission message
  contactFormValues, // a state that holds name, email and message values. 
  children, // stands for form elements name,email,message,button.
}) => {
  // Keep things well-hidden during runtime (and from bots. They are exposed for netlify build bots.
  const [inNetlifyBuild, setInNetlifyBuild] = useState(true);
  useEffect(() => {
    setInNetlifyBuild(false);
  }, []);

  // Honeypot Input state for "Honeypot" field, which used Honeypot form field.
  // The field is a hidden form field, that lures bot users into completing a field that human users can't see.
  // Detailed explanation link about Honeypot field: https://docs.netlify.com/forms/spam-filters/#extra-spam-prevention
  const [honey, setHoney] = useState("");
  // For application/x-www-form-urlencoded, encodeURIComponent() replaces spaces by +, and also %20 with +.
  // Detailed explanation link about encodeURIComponent(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent
  const formEncodeString = (str) =>
    encodeURIComponent(str).replace(/%20/g, "+");

  // Converts object to proper form data
  // name/value pairs are separated by the ampersand (&)
  // names are separated from values by the equals symbol (=).
  const encodeData = (obj) =>
    Object.entries(obj)
      .map(
        (pair) => formEncodeString(pair[0]) + "=" + formEncodeString(pair[1])
      )
      .join("&");

  // Submit via POST then pass back true
  // application/x-www-form-urlencoded stands for POST data at HTTP.
  // body represents HTTP message and send data to server in a query string format.
  // encodeData used for passing the string
  const handleSubmit = async () => {
    return await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeData({
        ...contactFormValues,
        "form-name": formName,
        info: honey,
      }),
    });
  };

  // checks beforeSubmit, onsubmit, afterSubmit works and has errors
  const onSubmit = async (e) => {
    e.preventDefault();
    if ((beforeSubmit && (await beforeSubmit())) || !beforeSubmit) {
      if (await handleSubmit()) {
        afterSubmit && afterSubmit();
      } else {
        throw new Error("Error submitting to Netlify");
      }
    } else {
      console.log("beforeSubmit false");
    }
  };
  // Netlify-honeypot attribute to avoid showing a captcha when a user submits the form.
  // Second form tag stands as "Honeypot" form field as a hidden form field, that lures bot users into completing a field that human users can't see.
  return inNetlifyBuild ? (
    <form
      name={formName}
      onSubmit={onSubmit}
      data-netlify="true"
      netlify-honeypot="info"
    >
      {children}
    </form>
  ) : (
    <form onSubmit={onSubmit}>
      {children}
      <p style={{ opacity: "0", position: "absolute", top: "0", left: "0" }}>
        <input
          style={{ width: "0", height: "0", zIndex: "-1" }}
          name="description"
          value={honey}
          onChange={(e) => setHoney(e.target.value)}
        />
      </p>
    </form>
  );
};

export default NetlifyForm;
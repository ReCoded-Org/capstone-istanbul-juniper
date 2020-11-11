import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./index.css";

const ContactUsForm = () => {
  const [t] = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

const encode = (data) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    formData.append(key, data[key]);
  });
  return formData;
};

  const handleSubmit = (e) => {
    const data = { "form-name": "contact", name, email, message };
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(data),
    })
      .then(() => setStatus("Form Submission Successful!!"))
      .catch((error) => setStatus("Form Submission Failed!"));

    e.preventDefault();
  };

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

  return (
    <div className="contactUsForm">
      <form name="contact" onSubmit={handleSubmit} action="/thank-you/">
        <input type="hidden" name="form-name" value="contact" />
        <div className="contactUsForm__content">
          <p>
            <label for="name">
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label for="email">
              E-mail:
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </label>
          </p>
          <p>
            <label for="message">
              Message:
              <br />
              <textarea
                name="message"
                value={message}
                onChange={handleChange}
              />
            </label>
          </p>
          <button className="contactUsForm__content__button" type="submit">
            Send
          </button>
        </div>
      </form>
      <h3 className="contactUsForm__result">{status}</h3>
    
    </div>
  );
};

export default ContactUsForm;

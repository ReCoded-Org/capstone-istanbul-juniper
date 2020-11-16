import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { RiSendPlaneFill } from "react-icons/ri";
import "./index.css";

const ContactUsForm = () => {
  const [t] = useTranslation();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });
  // The change in isSubmitted state triggers submission message
  const [isSubmitted, setIsSubmitted] = useState(false);
  // Converts object to proper form data(string)
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const handleChange = (e) => setFormValue({ [e.target.name]: e.target.value });
  // application/x-www-form-urlencoded stands for POST data at HTTP.
  // body represents HTTP message and send data to server in a query string format.
  // encode is used for passing the string to the body
  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      "data-netlify": "true",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...formValue }),
    }).then(() => {
      setIsSubmitted(true);
      setFormValue({
        name: "",
        email: "",
        message: "",
      })
      .catch((error) => console.log(error));

      e.preventDefault();
    });
  };

  return (
    <div className="contactUsFormContainer">
      <form onSubmit={handleSubmit}>
        <Col>
          {isSubmitted ? (
            <div className="contactUsForm__submissionMessage">
              <strong>{t("contact.contactUsForm.submissionMessage")}</strong>
            </div>
          ) : null}
          <Col>
            <label className="contactUsForm__label">
              {t("contact.contactUsForm.name")}
            </label>
          </Col>
          <Col>
            <input
              type="text"
              name="name"
              value={formValue.name}
              onChange={handleChange}
              className="contactUsForm__input"
              required
            />
          </Col>
        </Col>
        <Col>
          <Col>
            <label className="contactUsForm__label">
              {t("contact.contactUsForm.email")}
            </label>
          </Col>
          <Col>
            <input
              type="email"
              name="email"
              value={formValue.email}
              onChange={handleChange}
              className="contactUsForm__input"
              required
            />
          </Col>
        </Col>
        <Col>
          <Col>
            <label className="contactUsForm__label">
              {t("contact.contactUsForm.message")}
            </label>
          </Col>
          <Col>
            <textarea
              name="message"
              value={formValue.message}
              onChange={handleChange}
              className="contactUsForm__textarea"
              required
            />
          </Col>
        </Col>
        <Row>
          <div className="contactUsForm__submit">
            <button type="submit" className="contactUsForm__submitButton">
              {" "}
              {t("contact.contactUsForm.send")}
              <RiSendPlaneFill />
            </button>
          </div>
        </Row>
      </form>
    </div>
  );
};

export default ContactUsForm;
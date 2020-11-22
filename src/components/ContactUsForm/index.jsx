import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import "./index.css";
import { SyncOutlined } from "@ant-design/icons";
import { message } from "antd";

// Converts object to proper form data(string)
const encodeFormData = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactUsForm = () => {
  const [t] = useTranslation();
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    message: "",
  });

  // The change in isLoading state triggers SyncOutlined icon spinning
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setFormValue({ [e.target.name]: e.target.value });

  // application/x-www-form-urlencoded stands for POST data at HTTP.
  // body represents HTTP message and send data to server in a query string format.
  // encode is used for passing the string to the body
  // setTimeOut stands for showing post submission message about a time after submit
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    fetch("/", {
      method: "POST",
      "data-netlify": "true",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encodeFormData({ "form-name": "contact", ...formValue }),
    })
      .then(() => {
        setIsLoading(false);
        message.success({
          content: t("contact.contactUsForm.postSubmissionMessage"),
          className: "contactUsForm__postSubmissionMessage",
        });
        setFormValue({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => message.error(error));
  };

  return (
    <div className="contactUsFormContainer">
      <form onSubmit={handleSubmit}>
        <Col>
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
              {t("contact.contactUsForm.send")}
              <span>
                <SyncOutlined spin={isLoading} />
              </span>
            </button>
          </div>
        </Row>
      </form>
    </div>
  );
};

export default ContactUsForm;

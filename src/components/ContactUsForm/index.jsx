/*
 * ContactUsForm consists of validation and elements of contact form, imports Netlifyform for post data.
 * The base code that is used in both netlifyForm and index are implemented from https://github.com/jon-fm/react-ssg-netlify-forms-demo
 */
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import NetlifyForm from "../NetlifyForm";
import {Col, Row } from "antd";
import { RiSendPlaneFill } from "react-icons/ri";
import "./index.css";

const ContactUsForm = () => {
  const [t] = useTranslation();
  const [submissionMessage, setSubmissionMessage] = useState("");
  // beforeSubmit is for validations and disabling submit button
  const [processing, setProcessing] = useState(false);
  const beforeSubmit = async () => {
    if (
      contactFormValues.name.length > 0 &&
      contactFormValues.email.length > 0
    ) {
      setProcessing(true);
      // Wait 2 seconds to simulate async delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      return true;
    } else {
      return false;
    }
  };
  // TODO: get submission message to translate files.
  // afterSubmit is for submission message and enable submit button
  const afterSubmit = () => {
    setSubmissionMessage("Thanks for messaging us!");
    setProcessing(false);
  };
  // handles value changes of contact form
  const handleChange = (e) =>
    setContactFormValues({
      ...contactFormValues,
      [e.target.name]: e.target.value,
    });
  const [contactFormValues, setContactFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  return (
    <div className="contactUsForm">
      <NetlifyForm
        formName="contact"
        contactFormValues={contactFormValues}
        beforeSubmit={beforeSubmit}
        afterSubmit={afterSubmit}
        automaticHoneypot={true}
      >
        <span className="contactUsForm__result">{submissionMessage}</span>
        <Col>
          <Col>
            <label for="name" className="contactUsForm__content__label">
              {t("contact.contactUsForm.name")}
            </label>
          </Col>
          <Col>
            <input
              type="text"
              name="name"
              value={contactFormValues.name}
              onChange={handleChange}
              className="contactUsForm__content__input"
            />
          </Col>
        </Col>
        <Col>
          <Col>
            <label for="email" className="contactUsForm__content__label">
              {t("contact.contactUsForm.email")}
            </label>
          </Col>
          <Col>
            <input
              type="email"
              name="email"
              value={contactFormValues.email}
              onChange={handleChange}
              className="contactUsForm__content__input"
            />
          </Col>
        </Col>
        <Col>
          <Col>
            <label for="message" className="contactUsForm__content__label">
              {t("contact.contactUsForm.message")}
            </label>
          </Col>
          <Col>
            <textarea
              name="message"
              value={contactFormValues.message}
              onChange={handleChange}
              className="contactUsForm__content__textarea"
            />
          </Col>
        </Col>
        <Row>
          <div className="contactUsForm__content__submit">
            <button
              disabled={processing}
              className="contactUsForm__content__submit__button"
              type="submit"
            >
              {t("contact.contactUsForm.send")} <RiSendPlaneFill />
            </button>
          </div>
        </Row>
      </NetlifyForm>
    </div>
  );
};

export default ContactUsForm;
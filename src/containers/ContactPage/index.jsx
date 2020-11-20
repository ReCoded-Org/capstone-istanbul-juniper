import React from "react";
import StayUpToDate from "../../components/StayUpTodate";
import SpreadTheWordButton from "../../components/SpreadTheWordButton";
import ContactUsHeaderSection from "../../components/ContactUsHeaderSection";
import ContactUsForm from "../../components/ContactUsForm";
import ContactUsBottom from "../../components/ContactUsBottom";

const ContactPage = () => {
  return (
    <>
      <ContactUsHeaderSection />
      <ContactUsForm />
      <ContactUsBottom />
    </>
  );
};

export default ContactPage;

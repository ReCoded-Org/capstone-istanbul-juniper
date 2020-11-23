import React from "react";
import { Modal } from "antd";
import i18n from "i18next";

const LanguageChangeModal = ({
  modalVisibility,
  setModalVisibility,
  newLanguage,
}) => {
  return (
    <Modal
      title="Basic Modal"
      visible={modalVisibility}
      onOk={() => {
        setModalVisibility(false);
        i18n.changeLanguage(newLanguage);
        window.location.reload();
      }}
      onCancel={() => {
        setModalVisibility(false);
      }}
    >
      <p>Changing language will cause page to reload.</p>
      <p>Are you sure?</p>
    </Modal>
  );
};

export default LanguageChangeModal;

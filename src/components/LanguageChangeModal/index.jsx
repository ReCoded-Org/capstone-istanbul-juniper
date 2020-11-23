import React from "react";
import { Modal } from "antd";
import i18n from "i18next";
import { useTranslation } from "react-i18next";

// in games, page must be reloaded to change language. This modal is created to warn user about it
const LanguageChangeModal = ({
  modalVisibility,
  setModalVisibility,
  newLanguage,
}) => {
  const { t } = useTranslation();
  return (
    <Modal
      title={t("languageChangeModal.title")}
      visible={modalVisibility}
      cancelText={t("languageChangeModal.cancelText")}
      okText={t("languageChangeModal.okText")}
      onOk={() => {
        setModalVisibility(false);
        // prevents language to change before modal closes
        setTimeout(() => {
          i18n.changeLanguage(newLanguage);
          window.location.reload();
        }, 500);
      }}
      onCancel={() => {
        setModalVisibility(false);
      }}
    >
      <p>{t("languageChangeModal.warningText")}</p>
    </Modal>
  );
};

export default LanguageChangeModal;

import { useTranslation } from "react-i18next";

export function validateEmail(email) {
  // regex source https://emailregex.com/
  const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return re.test(email);
}

export const newErrorsObj = (registerInformation) => {
  const [t] = useTranslation();
  const MAX_PASSWORD_LENGTH = 8;
  const { fullName, email, age, password, isAgreed } = registerInformation;
  const errorObj = {};
  if (fullName.trim() === "") {
    errorObj.fullName = t("register.fullName");
  }
  if (age.trim() === "") {
    errorObj.age = t("register.age");
  }
  if (password.trim().length < MAX_PASSWORD_LENGTH) {
    errorObj.password = t("register.passwordCharacter");
  }
  if (password.trim() === "") {
    errorObj.password = t("register.enterPassword");
  }
  if (validateEmail(email).length === 0) {
    errorObj.email = t("register.emailFormat");
  }
  if (!isAgreed) {
    errorObj.isAgreed = t("register.agreeOnTerms");
  }

  return errorObj;
};

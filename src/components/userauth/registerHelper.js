export function validateEmail(email) {
    // regex source https://emailregex.com/
    const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
}

export const createErrorClassName = error => {
    if (!error) {
        return null;
    }
    return 'loginContainer__loginDialog__input__hasError';
};

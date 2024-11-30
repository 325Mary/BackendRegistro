function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function validatePassword(password) {
    const regex = /^.{6}$/;
        return regex.test(password);
}

module.exports = {
    validateEmail,
    validatePassword
};

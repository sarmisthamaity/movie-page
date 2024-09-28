const errorMessage = {
    successMessage: "Signup succesful!",
    login: "Login successful!",
    passwordNotMatched: "Password not matched!",
    invalidPass: "Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long!",
    mailIsNotValid: "Please enter a valid email address!",
    userExists: "User already exists!",
    userNotExists: "Requested user is not available!"
}

const filmMessage = {
    successMessage: "Success!",
}

const statusCode = {
    success: 200,
    badRequest: 400,
    notFound: 404,
}

module.exports = {
    errorMessage,
    filmMessage,
    statusCode
};

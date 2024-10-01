const errorMessage = {
    successMessage: "Signup succesful!",
    login: "Login successful!",
    passwordNotMatched: "Password not matched!",
    invalidPass: "Password must include at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long!",
    mailIsNotValid: "Please enter a valid email address!",
    userExists: "User already exists, please use another email!",
    userNotExists: "Requested user is not available!",
    tokenNotFound: "Token not found!",
    unauthorised: "Please do signup!"
}

const filmMessage = {
    successMessage: "Success!",
}

const statusCode = {
    success: 200,
    badRequest: 400,
    notFound: 404,
    unauthoried: 401
}

module.exports = {
    errorMessage,
    filmMessage,
    statusCode
};

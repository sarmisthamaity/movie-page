const jwt = require("jsonwebtoken");
const privateKey = process.env.PRIVATE_KEY;

const token = async(payload) => {
    // {
    //     expiresIn: '1h'
    // }
    return jwt.sign(payload, privateKey);
}

module.exports = {
    token
};

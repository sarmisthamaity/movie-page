require('dotenv').config();
const path = require("path");
const commonFun = require("../common/com");
const message = require("../messages/userMessage");
const directoryPath = path.join(__dirname, '..');
const filePath = path.join(directoryPath, 'userdetails.json');
const userService = require("../services/userService");
const Token = require("../middleware/token");

// create user/signup
const userSignUp = async (req, res) => {
    
    const datas = req.body;
    const checkPass = commonFun.isStrongPassword(datas.password);
    const checkMail = commonFun.isValidEmail(datas.email);

    if (!checkPass) {
        return res.status(message.statusCode.badRequest).send({
            status: message.statusCode.badRequest,
            message: message.errorMessage.invalidPass
        });
    }
    if (!checkMail) {
        return res.status(message.statusCode.badRequest).send({
            status: message.statusCode.badRequest,
            message: message.errorMessage.mailIsNotValid
        });
    }

    const userToken = await Token.token(datas);    
    const hashPass = await commonFun.hashPassword(datas.password);

    commonFun.readFile(filePath).then((userContent) => {
        let userDatas = userContent['user'];
        if (Array.isArray(userDatas) & userDatas.length === 0) {
            let userDetails = {
                "user": [
                    {
                        "name": datas.name,
                        "password": hashPass,
                        "email": datas.email,
                        "token": userToken
                    }
                ]
            }
            commonFun.writeFile(filePath, userDetails)
            .then((userDetails) => {

                    // console.log(userDetails["user"][0], "userDetails");
                    return res.status(message.statusCode.success).send({
                        status: message.statusCode.success,
                        message: message.errorMessage.successMessage,
                        data: userDetails["user"][0]
                    });
                })
        }
        else {
            datas["token"] = userToken;
            const findUserByMailId = userService.findUserByEmail(datas.email, userContent);
            
            if (findUserByMailId) {
                return res.status(message.statusCode.badRequest).send({
                    status: message.statusCode.badRequest,
                    message: message.errorMessage.userExists,
                });
            } else {
                
                userContent['user'].push(datas);
                commonFun.writeFile(filePath, userContent)
                    .then((userData) => {
                        return res.status(message.statusCode.success).send({
                            status: message.statusCode.success,
                            message: message.errorMessage.successMessage,
                            data: datas
                        });
                    })
            }
        }
    })

};

// login the user
const userLogin = async (req, res) => {

    const checkPass = commonFun.isStrongPassword(req.body.password);
    const checkMail = commonFun.isValidEmail(req.body.email);

    if (!checkPass) {
        return res.status(message.statusCode.badRequest).send({
            status: message.statusCode.badRequest,
            message: message.errorMessage.invalidPass
        });
    }

    if (!checkMail) {
        return res.status(message.statusCode.badRequest).send({
            status: message.statusCode.badRequest,
            message: message.errorMessage.mailIsNotValid
        });
    }

    commonFun.readFile(filePath).then(async(userContent) => {        
        const findUserByMailId = userService.findUserByEmail(req.body.email, userContent);        
        if(!findUserByMailId) {
            return res.status(message.statusCode.badRequest).send({
                status: message.statusCode.badRequest,
                message: message.errorMessage.userNotExists
            });
        }
        const isMatchPassword = await commonFun.checkPassword(req.body.password, findUserByMailId.password);
        if(!isMatchPassword) {
            return res.status(message.statusCode.badRequest).send({
                status: message.statusCode.badRequest,
                message: message.errorMessage.passwordNotMatched,
            });
        } else {
            return res.status(message.statusCode.success).send({
                status: message.statusCode.success,
                message: message.errorMessage.login,
                data: findUserByMailId
            });
        }
    })
};


module.exports = {
    userSignUp,
    userLogin
};

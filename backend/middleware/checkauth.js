require("dotenv").config();
const jwt = require("jsonwebtoken");
const message = require("../messages/userMessage");
const secretKey = process.env.PRIVATE_KEY;

module.exports = async(req, res, next) => {
    try{
        let token = '';
        // console.log(req.headers, "req.headers.authorization", req.headers.authorization);
        
        if(!req.headers.authorization){
            return res.status(message.statusCode.unauthoried).send({
                message: message.errorMessage.tokenNotFound,
                status: message.statusCode.unauthoried
            });
        }
        if(req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        }else{
            token = req.headers.authorization;
        };

        const decoded = await jwt.verify(token, secretKey);
        
        req.tokenData = decoded;
        // next(decoded)
        next();
    }catch(error){
        console.log('error', error);
        return res.status(message.statusCode.unauthoried).json({
            message: message.errorMessage.unauthorised,
            status: message.statusCode.unauthoried
        });
    };
};

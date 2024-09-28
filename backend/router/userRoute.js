const router = require('express').Router();
const userController = require("../controller/userController");

router.post('/signup', userController.userSignUp);
router.post('/login', userController.userLogin);

module.exports = router;

const router = require('express').Router();
const userController = require("../controller/userController");
const auth = require("../middleware/checkauth");

router.post('/signup', userController.userSignUp);
router.post('/login', auth, userController.userLogin);

module.exports = router;

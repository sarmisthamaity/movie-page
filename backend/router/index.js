const router = require('express').Router();

// const routes = require('./user.routes');
const userRute = require("./userRoute");
const mRoute = require("./movieRoute");

router.use('/api/user', userRute);
router.use('/api/movie', mRoute);

module.exports = router;

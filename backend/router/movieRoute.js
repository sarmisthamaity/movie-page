const router = require('express').Router();
const mController = require("../controller/movieController");

router.get('/list', mController.movieList);


module.exports = router;

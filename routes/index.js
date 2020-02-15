var express = require('express');
var router = express.Router();

const authRouter = require("./auth");

router.use("/auth", authRouter);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DAWG' });
});

module.exports = router;
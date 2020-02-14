var express = require('express');
var router = express.Router();

const authRouter = require("./auth");
const profileRouter = require("./profile");


router.use("/auth", authRouter);
router.use("/profile", profileRouter);

// Secret pages: logout, match, profile, chat
router.use("/", profileRouter); 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

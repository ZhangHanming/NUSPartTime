var models  = require('../models');
var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	console.log(req.session.user_id);
    res.render('index', {
        title: 'NUS Part-time',
        user_id: req.session.user_id
    });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('bird', { title: '' });
});

module.exports = router;
/**
 * Created by Owner on 8/7/2015.
 */

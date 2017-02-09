var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('new', { title: '' });
});

module.exports = router;/**
 * Created by Owner on 7/28/2015.
 */

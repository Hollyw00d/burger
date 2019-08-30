var express = require('express');
var router = express.Router();

var burgerModel = require('../models/burger');

router.get('/', function(req, res) {
    burgerModel.displayAll(function(data) {
        var burgerObject = {
            burgers: data
        };
        res.render('index', burgerObject);
    });
});

module.exports = router;
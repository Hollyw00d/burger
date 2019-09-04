var express = require('express');
var router = express.Router();

var burgerModel = require('../models/burger');

router.get('/', function(req, res) {
    burgerModel.displayAllNotDevoured(function(dataNotDevoured) {

        burgerModel.displayAllDevoured(function(dataDevoured) {
            var burgerObject = {
                burgersNotDevoured: dataNotDevoured,
                burgersDevoured: dataDevoured
            };


            res.render('index', burgerObject); 
        });
    });
});

router.post('/api/addnewburger/:name', function(req, res) {
    burgerModel.addBurger(req, function(status) {
        res.sendStatus(status);
    });
});

router.put('/api/burgerdevoured/:id', function(req, res) {
    burgerModel.updateDevouredBurger(req, function(status) {
        res.sendStatus(status);
    });
});

module.exports = router;
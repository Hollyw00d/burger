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

            console.log('burger_controllers.js: ', burgerObject);
            res.render('index', burgerObject); 
        });
    });
});

router.post('/api/addnewburger/:name', function(req, res) {
    
    //console.log('burger_controllers burgerName: ', burgerName);

    burgerModel.addBurger(req, function(data) {
        res.status(200).end();
    });
});

router.put('/api/burgerdevoured/:id', function(req, res) {
    burgerModel.updateDevouredBurger(req, function(data) {
        res.status(200).end();
    });
});

module.exports = router;
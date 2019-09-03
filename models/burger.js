var orm = require('../config/orm');

var burgerModel = {
    displayAllNotDevoured: function(cb) {
        orm.selectAllNotDevoured('burgers', function(res) {
            cb(res);
        });
    },
    displayAllDevoured: function(cb) {
        orm.selectAllDevoured('burgers', function(res) {
            cb(res);
        });
    },
    addBurger: function(req, cb) {
        var burgerName = req.params.name;
        console.log(burgerName);

        var gardenBurger = 'Garden Burger';
        orm.insertOne('burgers', burgerName, function() {
        });
    },
    updateDevouredBurger: function(req, id) {
        var burgerId = req.params.id;
        orm.updateOne('burgers', burgerId, function(res) {
        });
    }
};

module.exports = burgerModel;
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
        
        orm.insertOne('burgers', burgerName, function() {
            cb(201);
        });
    },
    updateDevouredBurger: function(req, cb) {
        var burgerId = req.params.id;
        orm.updateOne('burgers', burgerId, function(res) {
            cb(202);
        });
    },
    deleteAllBurgers: function(cb) {
        orm.deleteAll('burgers', function(res) {
            cb(204);
        });
    }
};

module.exports = burgerModel;
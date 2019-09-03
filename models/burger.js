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
    updateDevouredBurger: function(req, id) {
        var burgerId = req.params.id;
        orm.updateOne('burgers', burgerId, function(res) {
        });
    }
};

module.exports = burgerModel;
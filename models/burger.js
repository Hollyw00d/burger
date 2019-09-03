var orm = require('../config/orm');

var burgerModel = {
    displayAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    },
    updateDevouredBurger: function(cb) {
        //var body = req.body;
        var body = {
            id: 1
        };
        orm.updateOne('burgers', {id: 1}, function(res) {
            cb(res);
        });
    }
};

module.exports = burgerModel;
var orm = require('../config/orm');

var burgerModel = {
    displayAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        });
    }
};

module.exports = burgerModel;
const mongoose = require('mongoose');
module.exports = function(){
    return mongoose.createConnection("localhost","goods");
};
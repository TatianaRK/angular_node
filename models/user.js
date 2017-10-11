var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var User = new Schema({
    login: {
        type: String, unique : true, required: true, dropDups: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: String, required: true
    },
    client: {
        name: { type: String, required: true },
        surname: { type: String, required: true },
        lastname: { type: String, required: true },
        mail: { type: String, required: true },
        phone: { type: String, required: true }
    }
});

User.methods.validPassword = function(pwd) {
    return (this.password === pwd);
};

module.exports = mongoose.model('User', User);
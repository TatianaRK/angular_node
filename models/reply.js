var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Reply = new Schema({
    loginUser: {
        type: String, required: true
    },
    message: {
        type: String, required: true
    },
    update_at: {
        type: Date, default: Date.now()
    }
});

module.exports = mongoose.model('Reply', Reply);
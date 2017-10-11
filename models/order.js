var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

var Schema = mongoose.Schema;

var Order = new Schema({
    loginUser: {
        type: String, required: true
    },
    articul: {
        type: Number, required: true
    },
    date: {
        type: String, default: null
    },
    number: {
        type: Number, default: 1
    },
    summ: {
        type: Float, required: true
    },
    status: {
        type: String, required: true
    },
    delivery: {
        type: Boolean, default: false
    }
});


module.exports = mongoose.model('Order', Order);
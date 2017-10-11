var mongoose = require('mongoose');
var Float = require('mongoose-float').loadType(mongoose);

var Schema = mongoose.Schema;

var Product = new Schema({
    articul: {
        type: Number, unique : true, required: true, dropDups: true
    },
    name: {
        type: String, required: true
    },
    category: {
        type: String, default: 'прочее'
    },
    about: {
        type: String, required: true
    },
    material: {
        type: String, default: ''
    },
    colors: {
        type: String, default: ''
    },
    w_h: {
        type: String, default: ''
    },
    quantity: {
        type: Number, required: true
    },
    cost: {
        type: Float, required: true
    },
    status: {
        type: String, default: ''
    },
    image: {
        type: String, default: ''
    },
    salesText: {
        type: String, default: ''
    },
    salesCost: {
        type: Float, default: 0
    }
});


module.exports = mongoose.model('Product', Product);
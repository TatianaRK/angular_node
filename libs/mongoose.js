var mongoose = require('mongoose');
var log = require('./log')(module);

mongoose.connect("mongodb://localhost/ng_node");

var db = mongoose.connection;

db.on('error', function (err) {
    log.error('connection error:', err.message);
});
db.once('open', function callback () {
    log.info("Connected to DB!");
});
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mcq_ans = new Schema({
    username: String,
    score: String
});

module.exports = mongoose.model('mcq', mcq_ans);

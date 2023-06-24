var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/dbname");
var userSchema = mongoose.Schema({
    name: String,
    username: String,
    password:String,
    username: String
})

module.exports = mongoose.model('user',userSchema);
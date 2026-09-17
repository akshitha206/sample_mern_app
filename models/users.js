let mongoose = require('mongoose');
let userschema=mongoose.Schema({
    name:String,
    email:String,
    passward:String,
    role:String
})
let users=mongoose.model('users',userschema);
module.exports={users}
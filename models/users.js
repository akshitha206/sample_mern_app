let mongoose=require(mongoose);
let userschema=mongoose.Schema({
    name:String,
    eamil:{
        type:String,
        unique:true
    },
    password:String,
    role:{
        type:String
    }

})
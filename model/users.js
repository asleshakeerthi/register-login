// var mongoose=require("mongoose")
// var registerschema=new mongoose.Schema({
//     username:{
//         type:String,
//         required:true,
//         teim:true,
//         unique:true
//     },
//     email:{
//         type:String,
//         required:true,
//         trim:true
//     },
//     password:{
//         type:String,
//         required:true
//     },
//     role:{
//         type:String,
//         enum:["user","admin"],
//         default:"user"
//     }
// })
// module.exports=mongoose.model("users",registerschema)


var mongoose = require("mongoose")

var registerschema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        trim : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        trim : true,

    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["user","admin"],
        defualt : "user"
    }
})
module.exports = mongoose.model("users",registerschema)
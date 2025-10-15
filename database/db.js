// var mongoose=require("mongoose")
// async function connectToDatabase() {
//     try{
//         await mongoose.connect(process.env.URL)
//         console.log("connect to the database");
        
//     }catch(error){
//         console.log("error",error);
        
//     }
// }
// module.exports=connectToDatabase


var mongoose = require("mongoose")


async function connectToDatabase(){
    try{
        await mongoose.connect(process.env.URL)
        console.log("connected to the database");
    }catch(error){
        console.log("error",error);
    }
}

module.exports = connectToDatabase
// var user = require("../model/users")
// var bcrypt = require("bcrypt")
// var webtoken = require("jsonwebtoken")
// var register=async(req,res)=>{
//     try{
//         var {username,email,password,role}=req.body
//         var userexists = await user.findOne({$or : [{username},{email}]})
//         if(userexists){
//             return res.status(404).json({message:"user exists"})
//         }
//         var salt = await bcrypt.genSalt(10)
//         var hashpassword = await bcrypt.hash(password,salt)
//         var myuser = await user.create({
//             username,
//             email,
//             password : hashpassword,
//             role
//         })
//         if(myuser){
//             return res.status(201).json({message:"created a new user"})

//         }else{
//             return res.status(400).json({message:"cannot create"})
//         }
//     }catch(error){
//         console.log("error",error)
//     }
// }
// var login = async(req,res)=>{
//     var{username,password} = req.body
//     var userthere = await user.findOne({username})
//     if(!userthere){
//         return res.status(400).json({message:"invalid username or password"})
//     }
//     var ispassword = await bcrypt.compare(password,userthere.password)
//     console.log(ispassword)
//     if(!ispassword){
//         return res.status(400).json({mesage:"invalid username or password"})
//     }
//     var generatedtoken = webtoken.sign({
//         username : userthere._id,
//         email : userthere.email,
//         role : userthere.password

//     },process.env.JSON_WEB_TOKEN,{expiresIn:"10m"})
//     res.status(200).json({message : "login successful", token : generatedtoken})
// }

// module.exports= {register,login}




var user = require("../model/users")
var bcrypt = require("bcrypt")
var webtoken = require("jsonwebtoken")
var register=async(req,res)=>{
    try{
        var {username,email,password,role}=req.body
        var userexists = await user.findOne({$or : [{username},{email}]})
        if(userexists){
            return res.status(404).json({message:"user exists"})

        }
        var salt = await bcrypt.genSalt(10)
        var hashpassword = await bcrypt.hash(password,salt)
        var myuser = await user.create({
            username,
            email,
            password : hashpassword,
            role
        })
        if(myuser){
            return res.status(201).json({message:"created a new user"})

        }else{
            return res.status(201).json({message:"cannot create"})
        }
    }catch(error){
        console.log("error",error)
    }
}
var login = async(req,res)=>{
    var{username,password} = req.body
    var userthere = await user.findOne({username})
    if(!userthere){
        return res.status(400).json({message:"invalid username or password"})
    }
    var ispassword = await bcrypt.compare(password,userthere.password)
    console.log(ispassword)
    if(!ispassword){
        return res.status(400).json({mesage:"invalid username or password"})
    }
    var generatedtoken = webtoken.sign({
        username : userthere._id,
        email : userthere.email,
        role : userthere.role

    },process.env.JSON_WEB_TOKEN,{expiresIn:"10m"})
    res.status(200).json({message : "login successful", token : generatedtoken})
}

module.exports= {register,login}
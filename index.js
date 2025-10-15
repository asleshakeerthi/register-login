// require("dotenv").config()
// var express=require("express")
// var cors=require("cors")
// var app=express()
// app.use(express.json())
// var connectToDatabase=require("./database/db")
// connectToDatabase()
// var usreroute=require("./routes/user-routes")
// var homeroute=require("./routes/home-routes")
// app.use("/api/auth",usreroute)
// app.use("/api/Welcome",homeroute)
// app.use(cors())
// var PORT=process.env.PORT || 7777
// app.listen(PORT,()=>{
//     console.log("The server is running");
    
// })


require("dotenv").config()
var express = require("express")
//var cors = require("cors")
var app = express()
var connectToDatabase = require("./database/db")
var usreroute = require("./routes/user-routes")
var homeroute = require("./routes/home-routes")
var adminroute=require("./routes/admin-routes")
var app = express()
connectToDatabase()
app.use(express.json())
app.use("/api/auth",usreroute)
app.use("/api/welcome",homeroute)
app.use("/api/welcome",adminroute)
//app.use(cors())
var PORT = process.env.PORT || 7777
app.listen(PORT,()=>{
    console.log("The server is running");
})
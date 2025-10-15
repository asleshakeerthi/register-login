var express = require("express")
const authMiddleware = require("../middleware/auth-middleware")
const adminMiddleware = require("../middleware/admin-middleware")

var router = express.Router()
router.get("/admin",authMiddleware,adminMiddleware,(req,res)=>{
    res.json({message : "welcome to admin page"})
})
module.exports = router
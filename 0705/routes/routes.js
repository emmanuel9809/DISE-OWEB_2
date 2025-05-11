const express =require('express');
const path = require('path');
const router = express.Router();


router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/index.html"));
});


router.get("/registro.html", (req,res)=>{
    res.sendFile(path.join(__dirname, "../views/registro.html"));
});

module.exports=router;
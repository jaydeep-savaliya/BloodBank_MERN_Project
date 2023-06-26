const jwt = require('jsonwebtoken');
const express = require('express');
const app = express();
const cookieParser= require('cookie-parser');
const Registerdata = require('../model/register_data');

app.use(cookieParser());
const Authenticate = async(req,res,next)=>{
    try {
        const token=req.cookies.jwtoken;
        const verifyToken=jwt.verify(token,process.env.SECRET_KEY);
        const rootUser = await Registerdata.findOne({_id:verifyToken._id,"tokens.token":token});
        if(!rootUser){throw new Error("user not found")}
        req.token=token;
        req.rootUser=rootUser;
        req.userID=rootUser._id;
        next();
    } catch (error) {
        res.status(401).send("no token found");
    }
}
module.exports = Authenticate;
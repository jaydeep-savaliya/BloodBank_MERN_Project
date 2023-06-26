const express = require('express');
const jwt = require('jsonwebtoken');
const Donate = require('../model/blood_donate');
const Info = require('../model/blood_info');
const Registerdata = require('../model/register_data');
const BloodData = require('../model/blood_stock_data');
const statedata = require('../model/state_district');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const Authenticate = require('../middleware/authenticate');
require('../db/conn');
const router = express.Router();
const cookieParser = require("cookie-parser");
router.use(cookieParser());
router.get('/',async(req,res)=>{
    try {
        const data = await Info.find();
        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.json("fail");
    }
});
router.post('/Donate',async(req,res)=>{
    const {name,email,phone,work,date,gender,address,bloodgroup} = req.body;
    try {
        if(!name || !email || !phone || !work || !date || !gender || !address || !bloodgroup){
            return res.json("please fill form correct");
        }else{
            const emailid = await Registerdata.findOne({email:email});
        if(emailid!=null){
            if(email==emailid.email && phone==emailid.phone){
                const data = await Donate({name,email,phone,work,date,gender,address,bloodgroup});
                await data.save();
                return res.json("Success");
            }else{
                return res.json("fail");
            }
        }else{
            return res.json("fail");
        }
        }
    } catch (error) {
        return res.json("fail");
    }
});
router.post('/Register',async(req,res)=>{
    const { name,email,phone,work,password,cpassword  } = req.body;
    const len = phone.length;
    try {
        if(!name || !email || !phone || !work || !password || !cpassword){
            return res.json("Fill Form Properly");
        }else{
            const emailid = await Registerdata.find({email:email});
        if(Object.keys(emailid).length==0){
            if(password===cpassword && len===10){
                const data = await Registerdata({name,email,phone,work,password,cpassword});
                await data.save();
                return res.json("success");
            }else{
                return res.json("fail");
            }
        }else{
            console.log("Already Register");
            return res.json("Already Register");
        }
        }
    } catch (error) {
        return res.json("fail");
    }
});
router.post('/Login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.json("Fill Form Properly");
        }else{
            const emailid = await Registerdata.findOne({email:email});
        if(emailid!=null){
            const isMatch = await bcrypt.compare(password,emailid.password);
            const token = await emailid.generateAuthToken();
            res.cookie("jwtoken",token,{
                expires:new Date(Date.now()+3600000),
                httpOnly:true
            });
            if(isMatch){
                return res.json("success");
            }else{
                return res.json("Password Not Match");
            }
        }else{
            return res.json("fail");
        }
        }
    } catch (error) {
        return res.json("fail");
    }
});
router.post('/Stock',async(req,res)=>{
    const {distname,bloodgroup,bloodcomponent} = req.body;
    try {
        if(!distname || !bloodgroup || !bloodcomponent){
            return res.json("Please Enter The Correct Details");
        }else{
            if(bloodcomponent=="Find Blood"){
                const data = await BloodData.find({$and:[
                    {district:distname},
                    {bloodgroup:bloodgroup}]
                });
                const len = Object.keys(data).length;
                if(len===0){
                    return res.json("fail");
                }else{
                    return res.json(data);
                }
            }else{
                return res.json("fail");
            }
    }
    } catch (error) {
        return res.json("fail");
    }
});
router.post('/district',async(req,res)=>{
    const {statename} = req.body;
    try {
        const mydata = await statedata.find({state:statename},{districts:1});
        return res.status(200).json(mydata);
    } catch (error) { 
        return res.status(401).json("fail");
    }
});
router.get("/Profile",Authenticate,async(req,res)=>{
   try {
        return res.json(req.rootUser);
   } catch (error) {
        return res.status(401).json(error);
   }
});
router.get('/Logout',async(req,res)=>{
    res.clearCookie('jwtoken',{path:'/'});
    return res.status(200).json("Logout Successful");
})
module.exports = router;
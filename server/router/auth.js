const express = require('express');
const Donate = require('../model/blood_donate');
const Info = require('../model/blood_info');
const Registerdata = require('../model/register_data');
const BloodData = require('../model/blood_stock_data');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
require('../db/conn');
const router = express.Router();
router.get('/',async(req,res)=>{
    try {
        const data = await Info.find({});
        return res.json(data);
    } catch (error) {
        console.log(error);
        return res.json("fail");
    }
});
router.post('/Donate',async(req,res)=>{
    const {name,email,phone,work,date,gender,address,bloodgroup} = req.body;
    try {
        const emailid = await Registerdata.findOne({email:email});
        // console.log(emailid);
        console.log(email);
        console.log(phone);
        console.log(emailid.email);
        console.log(emailid.phone);
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
    } catch (error) {
        return res.json("fail");
    }
});
router.post('/Register',async(req,res)=>{
    const { name,email,phone,work,password,cpassword  } = req.body;
    const len = phone.length;
    try {
        if(password===cpassword && len===10){
            const data = await Registerdata({name,email,phone,work,password,cpassword});
            const userData = await data.save();
            return res.json("success");
        }else{
            return res.json("fail");
        }
    } catch (error) {
        return res.json("fail");
    }
});
router.post('/Login',async(req,res)=>{
    try {
        const {email,password} = req.body;
        const emailid = await Registerdata.findOne({email:email});
        if(emailid!=null){
            const isMatch = await bcrypt.compare(password,emailid.password);
            if(isMatch){
                return res.json("success");
            }else{
                return res.json("Password Not Match");
            }
        }else{
            return res.json("fail");
        }
    } catch (error) {
        return res.json("fail");
    }
});
router.post('/Stock',async(req,res)=>{
    const {statename,distname,bloodgroup,bloodcomponent} = req.body;
    const data = await BloodData.find({$and:[
        {state:statename},
        {district:distname},
        {bloodgroup:bloodgroup}]
    });
    // console.log(data);
    const len = Object.keys(data).length;
    try {
        if(len===0){
            return res.json("fail");
        }else{
            return res.json(data);
        }
    } catch (error) {
        return res.json("fail");
    }
})
module.exports = router;
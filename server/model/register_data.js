const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'JAYDIPSAVALIYAISTHECOMPUTERENGINEER';
const RegisterSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    work:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    cpassword:{
        type:String,
        required:true,
    },
    tokens:[
        {
            token:{
                type:String,
                required:true
            }
        }
    ]
});
RegisterSchema.pre('save',async function(next){
    try {
        if(this.isModified('password')){
            this.password = await bcrypt.hash(this.password,13);
            this.cpassword = await bcrypt.hash(this.cpassword,13);
        }
        next();
    } catch (error) {
        console.log(error);
    }
});
RegisterSchema.methods.generateAuthToken = async function(){
    try {
        const token = jwt.sign({_id:this._id},SECRET_KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch (error) {
        console.log(error);
    }
}
const Registerdata = new mongoose.model('Registerdata',RegisterSchema);
module.exports = Registerdata;
const mongoose = require('mongoose');
const donateSchema = new mongoose.Schema({
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
    date:{
        type:Date,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
    bloodgroup:{
        type:String,
        required:true,
    }
});
const Donate = new mongoose.model('Donate',donateSchema);
module.exports = Donate;
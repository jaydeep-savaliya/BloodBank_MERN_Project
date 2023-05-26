const mongoose = require('mongoose');
const BloodInfoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    percentage:{
        type:String,
        required:true,
    },
    information:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
});
const Info = new mongoose.model('Info',BloodInfoSchema);
module.exports = Info;
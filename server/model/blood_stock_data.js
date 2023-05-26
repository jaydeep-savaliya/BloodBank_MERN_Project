const mongoose = require('mongoose');
const DataSchema = new mongoose.Schema({
    state:{
        type:String,
        required:true,
    },
    district:{
        type:String,
        required:true,
    },
    bloodgroup:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    stockavailability:{
        type:Number,
        required:true,
    },
    rate:{
        type:Number,
        required:true,
    }
});
const BloodData = new mongoose.model('BloodData',DataSchema);
module.exports = BloodData;
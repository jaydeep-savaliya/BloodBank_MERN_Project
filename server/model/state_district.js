const mongoose = require('mongoose');
const state_dist_schema = new mongoose.Schema({
    state:{
        type:String,
        required:true,
    },
    districts:[{type:String,required:true}]
});
const statedata = new mongoose.model("statedata",state_dist_schema);
module.exports = statedata;
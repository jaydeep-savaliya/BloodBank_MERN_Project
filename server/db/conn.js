const mongoose = require('mongoose');
const Info = require('../model/blood_info');
const statedata = require('../model/state_district');
const BloodData = require('../model/blood_stock_data');
mongoose.connect(process.env.DATABASE_STRING,{
    useNewUrlParser: process.env.URL_PARSER,
    useUnifiedTopology: process.env.TOPOLOGY,
    serverSelectionTimeoutMS: process.env.TIME_OUT,
    autoIndex: process.env.AUTO_INDEX,
    maxPoolSize: process.env.POOL_SIZE,
    socketTimeoutMS: process.env.SOCKET_TIME_OUT,
    family: process.env.FAMILY
}).then(()=> console.log("Connection Successful..")).catch((err)=>console.log(err));


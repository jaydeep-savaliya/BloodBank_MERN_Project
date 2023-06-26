const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
require('./db/conn');
app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));
app.use(express.urlencoded({extended:true}));
app.listen(process.env.PORT,()=>{
    console.log(`server Running At port no  ${process.env.PORT}`)
});

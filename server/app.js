const express = require('express');
const app = express();
const cors = require('cors');
require('./db/conn');
const port = 5000;
app.use(cors());
app.use(express.json());
app.use(require('./router/auth'));
app.use(express.urlencoded({extended:true}));
app.get('/',(req,res)=>{
    res.send("Hello Buddies");
});
app.listen(port,()=>{
    console.log(`server Running At port no  ${port}`)
});

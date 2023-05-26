const mongoose = require('mongoose');
const Info = require('../model/blood_info');
const BloodData = require('../model/blood_stock_data');
const DB = 'mongodb+srv://jaydeeps048:HAzsaAhTCMKUprVG@cluster0.eimxzrp.mongodb.net/BloodWeb';
mongoose.connect(DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4
})
.then(()=> console.log("Connection Successful.."))
.catch((err)=>console.log(err));

// Info.create([
// {
//     name:"AB Positive",
//     percentage:"2%",
//     information:"AB positive blood type is known as the “universal recipient” because AB positive patients can receive red blood cells from all blood types. people with blood type AB are rare and special because they have both A and B antigens on the surface of red blood cells, but no antibodies in the plasma.",
//     image:"https://rarest.org/wp-content/uploads/2019/10/AB-Positive.png",
// },
// {
//     name:"AB Negative",
//     percentage:"1%",
//     information:"AB negative is the rarest blood type in the ABO blood group, accounting for just 1% of our blood donors. In total only 3% of donors belong to the AB blood group. Type AB-negative blood is considered a universal plasma donor, meaning anyone can receive type AB-negative plasma. A patient with type AB-negative blood may receive any Rh-negative blood type.",
//     image:"https://rarest.org/wp-content/uploads/2019/10/AB-Negative.png",
// }
// ]);
BloodData.create({
    state:"Gujrat",
    district:"Ahmedabad",
    bloodgroup:"O-Positive",
    location:"1st Floor, Chandraprabhu Complex, Stadium Road Sardar Patel Statue Coss Road, Stadium Road Sardar Patel Statue Coss Road, Ahmedabad, Gujarat 380014",
    stockavailability:10000,
    rate:5000,
})
// const getData = async()=>{
//     const data = await BloodData.find({},{"state":1,_id:0});
//     console.log(data);
// }
// getData();
const mongoose = require("mongoose");

//const DB =  process.env.DATABASE || 'mongodb://localhost:27017/Profile-Management-System' 
// mongoose.connect(DB,{
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }).then(()=> console.log("DataBase Connected")).catch((err)=>{
//     console.log(err);
// }) 

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Flight-API';
 
const connectDatabase = () => {
    mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Database Connected");
        })
    } 

module.exports = connectDatabase;
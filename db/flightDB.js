require("dotenv").config();
const connectDatabase= require('./connection')
const FlightModel= require('../models/flights')
const flightJson= require('./flightData.json')

// to send json data to database
const main=async ()=>{
    try{
        await connectDatabase()
        await FlightModel.deleteMany()
        await FlightModel.create(flightJson)
        console.log(`Data set to Database Successful`);
    }
    catch(error){
        console.log(error);
    }
}

main()



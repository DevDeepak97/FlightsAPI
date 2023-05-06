const flightModel= require('../models/flights')

exports.getAllFlights=async (req,res, next)=>{
    let paremData=req.query
    paremData=Object.keys(paremData).length

    if (!paremData) {   
        const data = await flightModel.find({})
        if (data) {
            res.status(200).send(data)
        }
        else {
            res.status(404).send('Data not found')
        }
    }
    else{
        res.status(404).json({error:'Data not found'})         
    }    
}

exports.getFlightsPrice=async (req,res,next)=>{
    const {sourse,destination,date}=req.query;
    if(Object.keys(req.query).length<=3 && Object.keys(req.query).length>0){
    if(sourse && destination && date){
        const data= await flightModel.find({"from.city":{$regex:sourse,$options:'i'},"to.city":{$regex:destination,$options:'i'},'date':date}).sort('price')
        const record=data.map((data)=>{
           return {flight:data.flightName,price:data.price}
        });
        
        if(record.length){
            res.status(200).json(record)
        }
        else{
            res.status(404).json({Error:'Data not found'})
        }
        
    }
    else if(sourse && destination){
        const data= await flightModel.find({"from.city":{$regex:sourse,$options:'i'},"to.city":{$regex:destination,$options:'i'}}).sort('price')
        const record=data.map((data)=>{
           return {flight:data.flightName,price:data.price}
        });
        if(record.length){
            res.status(200).json(record)
        }
        else{
            res.status(404).json({Error:'Data not found'})
        }
    }
    else{
        res.status(404).json({Error:'Both sourse and destination parameter valuses required!'})
    }
}
    else{
        res.status(404).json({Error:'Data not found'})
    }
}
 


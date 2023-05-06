const {Schema,model}= require('mongoose')

const flightSchema= Schema({
    price: {
        type:Number,
        default:9999
    },
    date:{
        type: Date,
        default:Date.now
    },
    flightName:{
        type:String,
        required:true
    },
    from: {
      city:{
        type:String,
        required:true
    },
      short:{
        type:String,
        default:'N/A'
    },
    },
    to: {
      city:{
        type:String,
        required:true
    },
      short:{
        type:String,
        default:'N/A'
    },
    }
})

module.exports= model('Flight',flightSchema)
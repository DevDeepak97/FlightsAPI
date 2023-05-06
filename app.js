require("dotenv").config();
const express= require('express')
const cors=require('cors')
const flightRouter= require('./routes/flights')
const connectDatabase= require('./db/connection')
const app= express()

const PORT= process.env.PORT || 4000

// UncaughtException Error
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    process.exit(1);
});

// database connection
connectDatabase()

app.use(cors())
app.use(express.json())

// routers
app.use('/api/flights',flightRouter)

// Invalid routes error hendler
app.use((req,res,next)=>{
    const error= new Error('Note Found')
    error.status=404
    next(error)
})

app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }
    })
})
 
app.listen(PORT,()=>{
    console.log(`server has started on port 4000`);
}) 
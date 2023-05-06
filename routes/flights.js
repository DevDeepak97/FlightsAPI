const express= require('express')
const router= express.Router()
const mongoose= require('mongoose')

const {getAllFlights,getFlightsPrice}= require('../controller/flights')

router.get('/',getAllFlights)
router.get('/location',getFlightsPrice)

module.exports= router

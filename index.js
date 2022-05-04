const express = require('express')
const app = express();
const bodyParser=require('body-parser')
const  port = 3009
const mongoose = require("mongoose");
require('./model/dbConfig')
const hotelRoute = require('./routes/hotelRoutes')
const restaurantRoute = require('./routes/restaurantRoutes')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))


app.use('/', hotelRoute)
app.use('/' , restaurantRoute)


app.listen(port , ()=>{
    console.log(`le ${port} est en marche `);
})





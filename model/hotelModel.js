const mongoose = require("mongoose")

const hotelSchema =  mongoose.Schema(

{
 name:String,
address :String,
city : String,
country:String,
stars:Number , 
hasSpan : Boolean,
hasPool :Boolean,
priceCategory :Number,

},


)

const hotelModel = mongoose.model("trippy_basics",hotelSchema)

const hotel = new hotelModel({
    name:"ALAKZAM",
address :"18 rue a la base",
city : "wonderland",
country:"Almerad",


}) 

// hotel.save()


module.exports = hotelModel
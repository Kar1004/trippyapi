const mongoose = require("mongoose")

const restaurantSchema =   mongoose.Schema(
{
name:String,
address :String,
city : String,
country:String,
stars:Number , 
hasSpan : Boolean,
hasPool :Boolean,
priceCategory :Number,

}

)

const restaurantModel = mongoose.model("restaurant",restaurantSchema)

const restaurant = new restaurantModel({
    name:"ALAZAM",
address :"18 rue a la ciy",
city : "wonderland",
country:"Almerad",


}) 

restaurant.save()


module.exports = {restaurantModel}
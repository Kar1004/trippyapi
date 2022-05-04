const router = require('express').Router();
const hotelModel = require("../model/hotelModel");


router.get('/hotels',(req,res,next)=>{
    hotelModel.find().exec().then( (hotels) =>{
       res.json(hotels)
    })
}),


router.get('/hotels/:id',(req,res,next)=>{
   const id = req.params.id ;
    hotelModel.findById({ _id : id})
             .exec()
             .then( (hotels) =>{
       res.json(hotels)
    })
}),
router.post('/hotels',(req,res,next)=>{
   const body = req.body 
   const newHotel = new hotelModel(body);
   
    newHotel.save()
            .then( (hotels) =>{
       res.json(hotels)
    }).catch(err =>{
        res.status(500).send(err)
    })
}),
router.put('hotels/:id?name=newName',(req,res,next)=>{
    const id = req.params.id ;
    const newName = req
     hotelModel.findAndupdateOne({ _id : id})
              .exec()
              .then( (hotels) =>{
        res.json(hotels)
     })
 }),

 router.delete('/hotels/:id' ,(req,res,next)=>{
    const id = req.params.id ;
     hotelModel.remove({ _id : id})
               .then((hotels)=>{
                    res.json(hotels)   
               })
 })


module.exports= router
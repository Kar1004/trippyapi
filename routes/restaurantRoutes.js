const mongoose = require("mongoose")
const router = require('express').Router();
const {restaurantModel} = require('../model/RestaurantModel');



router.get('/restaurant' ,  (req,res,next)=>{
    restaurantModel.find().exec().then( (restos)=>{
        res.json(restos)
    })
})
router.get('/restaurant/:id' ,  (req,res,next)=>{
    const id = req.params.id;

    restaurantModel.findById({_id : id}).exec().then( (restos)=>{
        res.json(restos)
    })
})


router.post('/restaurant' ,  (req,res,next)=>{
    const body = req.body;
    const newResto = restaurantModel(body)

    newResto.save().then( (restos)=>{
        res.json(restos)
    })
})

router.put('/restaurant/:id' ,  (req,res,next)=>{
    const name = req.query.name;
    const id = req.params.id;

    restaurantModel.findByIdAndUpdate({
       id,
        name
    },{new:true}).then(restos =>{
        restos
    })
      .catch(err => console.log(err));
   


 
})

router.delete('/restaurant/:id' ,(req,res,next)=>{
    const id = req.params.id ;
     restaurantModel.findByIdandelete({ _id : id})
               .then((resto)=>{
                    res.json(resto)   
               }).catch( res.send(400))
 })

module.exports = router
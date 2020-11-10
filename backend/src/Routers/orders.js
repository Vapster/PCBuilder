const express = require('express')
const Order = require('../models/orders')
const jwt = require('jsonwebtoken')
const router = express.Router()
const sign = "Iwillchangethisanyway"

router.post('/order', async (req, res)=>{
    const authToken = req.header('Authorization').replace('Bearer ', '')
    const decode = jwt.verify(authToken, sign)

    const userOrder = {
        ...req.body,
        owner: decode['_id']
    }
    // console.log(userOrder)

    try{
        const order = new Order(userOrder)
        await order.save()
        res.send(order)
    }catch(e) {
        res.send(e)
    }
})

router.delete('/order/:id', async (req, res) => {

    const authToken = req.header('Authorization').replace('Bearer ', '')
    const decode = jwt.verify(authToken, sign)
    
    try{
        const orderWithID = await Order.findById(req.params.id)

        if (!orderWithID){
            res.status(404).send("Unable to delete!")
        }

        if (decode['_id'] === orderWithID.owner.toString()){
            const ord = await Order.findByIdAndDelete(req.params.id)
            res.send(ord)
        }
        else{
            res.status(404).send("Unable to delete!")
        }
    }catch (e){
        res.status(400).send(e)
    }
})

module.exports = router
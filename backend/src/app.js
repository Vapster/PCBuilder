const e = require('express')
const express = require('express')
const jwt = require('jsonwebtoken')
// const cors = require('cors')
require('./mongoose')
const User = require('./models/user')
const Order = require('./models/orders')

// move JWT token sign to environment variable
const sign = "Iwillchangethisanyway"

const port = process.env.PORT || 3000
const app = express()

// app.use(cors())
app.use(express.json())

app.post('/order', async (req, res)=>{
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

app.delete('/order/:id', async (req, res) => {

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

app.post('/user/login', async (req, res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateToken()

        user.tokens = user.tokens.concat({token})
        await user.save()
        
        res.send({user, token})
    }catch(e){
        console.log(e)
        res.status(400).send(e)
    }
})

app.post('/user', async (req, res)=>{
    const user = new User(req.body)
    const token = await user.generateToken()

    user.tokens = user.tokens.concat({token})
    user.save().then(
        () => {
            // console.log(req.body)
            res.send({user, token})
        }
    ).catch((e) => {
        res.send(e.message)
    })
})

app.listen(port, ()=>{
    console.log("server is up!");
});
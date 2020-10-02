const express = require('express')
// const cors = require('cors')
require('./mongoose')
const User = require('./models/user')

const port = process.env.PORT || 3000
const app = express()

// app.use(cors())
app.use(express.json())

app.post('/user', (req, res)=>{
    const user = new User(req.body)
    user.save().then(
        () => {
            console.log(req.body)
            res.send(user)
        }
    ).catch((e) => {
        res.send(e.message)
    })
})

app.listen(port, ()=>{
    console.log("server is up!");
});
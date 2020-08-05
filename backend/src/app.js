const express = require('express')

const app = express()

app.get('', (req, res)=>{
    res.json({done: true});
})

app.listen(3000, ()=>{
    console.log("server is up!");
});
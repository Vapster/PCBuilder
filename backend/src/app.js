const express = require('express')

const app = express()

app.get('', (req, res)=>{
    res.json({done: true});
})

app.post('/getprices', (req, res)=>{
    console.log(req.params);
    console.log(req.body);
    res.send({
        i7: 500
    });
})

app.listen(3000, ()=>{
    console.log("server is up!");
});
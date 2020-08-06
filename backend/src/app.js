const express = require('express')

const app = express()

const state = {
    CPU: {
        i38G: 50,
        i39G: 60,
        i58G: 100,
        i59G: 110,
        i78G: 170,
        i79G: 200,
        i98G: 350,
        i99G: 380
    },
    GPU: {
        g1050: 50,
        g1060: 60,
        g1660: 100,
        r2060: 110,
        g1070: 170,
        r2070: 200,
        g1080: 350,
        r2080: 380
    },
    motherboard: {
        default: 100,
        msi: 150,
        asus: 190
    },
    case: {
        white: 100,
        black: 130,
    },
    memory: {
        s4GB: 50,
        s8GB: 60,
        s16GB: 100,
        d16GB: 110,
        s32GB: 170,
        d32GB: 200,
        d64GB: 350
    },
    storage: {
        s256GB: 100,
        s512GB: 170,
        s1000GB: 350,
        h512GB: 110,
        h1000GB: 170,
        i2000GB: 200
    },
}

app.get('', (req, res)=>{
    res.json({done: true});
})

app.post('/getprices', (req, res)=>{
    var price = state[req.query.hardware][req.query.model];
    res.send({price});
})

app.post('/gethardwares', (req, res)=>{
    var hardwares = Object.keys(state);
    res.send(hardwares);
})

app.post('/getmodels', (req, res)=>{
    var models = Object.keys(state[req.query.hardware]);
    res.send(models);
})

app.listen(3000, ()=>{
    console.log("server is up!");
});
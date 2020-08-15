const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const state = {
    CPU: {
        i38G: [50, "Intel i3 8th gen"],
        i39G: [60, "Intel i3 9th gen"],
        i58G: [100, "Intel i5 8th gen"],
        i59G: [110, "Intel i5 9th gen"],
        i78G: [170, "Intel i7 8th gen"],
        i79G: [200, "Intel i7 9th gen"],
        i98G: [350, "Intel i9 8th gen"],
        i99G: [380, "Intel i9 9th gen"]
    },
    GPU: {
        g1050: [50, "NVIDIA gtx 1050"],
        g1060: [60, "NVIDIA gtx 1060"],
        g1660: [100, "NVIDIA gtx 1660"],
        r2060: [110, "NVIDIA gtx 2060"],
        g1070: [170, "NVIDIA gtx 1070"],
        r2070: [200, "NVIDIA gtx 2070"],
        g1080: [350, "NVIDIA gtx 1080"],
        r2080: [380, "NVIDIA gtx 2080"]
    },
    motherboard: {
        gigabyte: [100, "GIGABYTE GA-H110"],
        msi: [150, "MSI B550-A PRO"],
        asus: [190, "ASUS TUF B450-PRO"]
    },
    case: {
        black: [130, "Cooler Master MasterBox Lite 5"],
        MUSETEX: [100, "MUSETEX Phantom Black ATX"]
    },
    memory: {
        s4GB: [50, "4 GB single channel"],
        s8GB: [60, "8 GB single channel"],
        s16GB: [100, "16 GB single channel"],
        d16GB: [110, "16 GB dual channel"],
        s32GB: [170, "32 GB single channel"],
        d32GB: [200, "32 GB dual channel"],
        d64GB: [350, "64 GB dual channel"]
    },
    storage: {
        s256GB: [100, "256 GB SSD"],
        s512GB: [170, "512 GB SSD"],
        s1000GB: [350, "1 TB SSD"],
        h512GB: [110, "512 GB HDD"],
        h1000GB: [170, "1 TB HDD"],
        h2000GB: [200, "2 TB HDD"]
    },
}

app.get('', (req, res)=>{
    res.json({done: true});
})

app.post('/getprices', (req, res)=>{
	console.log(req.body)
    //var price = state[req.query.hardware][req.query.model];
    res.send({"price": 150});
})

app.get('/getall', (req, res) => {
	res.send(state);
});

app.post('/gethardwares', (req, res)=>{
    var hardwares = Object.keys(state);
    res.send(hardwares);
})

app.post('/getmodels', (req, res)=>{
    var models = Object.keys(state[req.query.hardware]);
    res.send(models);
})

app.listen(8080, ()=>{
    console.log("server is up!");
});
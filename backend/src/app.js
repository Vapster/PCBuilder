const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())

const state = {
    CPU: {
        i311G: [50, "Intel® Core™ i3-1115G4 Processor", {title: "Intel® Core™ i3-1115G4 Processor (6M Cache, up to 4.10 GHz)", points: ["2 Cores", "6 MB Intel® Smart Cache Cache", "4 Threads", "4.10 GHz Max Turbo Frequency", "G - Includes discrete graphics on package", "11th Generation"]}],
        i310G: [60, "Intel® Core™ i3-10320 Processor", {title: "Intel® Core™ i3-10320 Processor", points:["8 MB Intel® Smart Cache Cache", "4 Cores", "8 Threads", "4.60 GHz Max Turbo Frequency", "10th Generation"]}],
        i511G: [100, "Intel® Core™ i5-1130G7 Processor", {title: "Intel® Core™ i5-1130G7 Processor", points: ["8 MB Intel® Smart Cache Cache", "4 Cores", "8 Threads", "4.00 GHz Max Turbo Frequency", "G - Includes discrete graphics on package", "11th Generation"]}],
        i510G: [110, "Intel® Core™ i5-10400T Processor", {title: "Intel® Core™ i5-10400T Processor", points:["12 MB Intel® Smart Cache Cache", "6 Cores", "12 Threads", "3.60 GHz Max Turbo Frequency", "T - Power-optimized lifestyle", "10th Generation"]}],
        i711G: [170, "Intel® Core™ i7-1160G7 Processor", {title: "Intel® Core™ i7-1160G7 Processor (12M Cache, up to 4.40 GHz)", points: ["12 MB Intel® Smart Cache Cache", "4 Cores", "8 Threads", "4.40 GHz Max Turbo Frequency", "G - Includes discrete graphics on package", "11th Generation"]}],
        i710G: [200, "Intel® Core™ i7-10700T Processor", {title:"Intel® Core™ i7-10700T Processor", points:["16 MB Intel® Smart Cache Cache", "8 Cores", "16 Threads", "4.50 GHz Max Turbo Frequency", "T - Power-optimized lifestyle", "10th Generation"]}],
        i910TG: [350, "Intel® Core™ i9-10900T Processor", {title: "Intel® Core™ i9-10900T Processor", points:["20 MB Intel® Smart Cache Cache", "10 Cores", "20 Threads", "4.60 GHz Max Turbo Frequency", "T - Power-optimized lifestyle", "10th Generation"]}],
        i910KG: [380, "Intel® Core™ i9-10900K Processor", {title: "Intel® Core™ i9-10900K Processor", points: ["20 MB Intel® Smart Cache Cache", "10 Cores", "20 Threads", "5.30 GHz Max Turbo Frequency", "K - Unlocked", "10th Generation"]}]
    },
    GPU: {
        g1050: [50, "GEFORCE GTX 1050", {title: "GEFORCE GTX 1050", points:["Memory: 4 GB GDDR5", "Memory Speed: 7.0 Gbps", "Base Clock (MHz): 1290", "Boost Clock (MHz): 1392", "CUDA Cores: 768", "Graphics Card Power: 75W"]}],
        g1060: [60, "GEFORCE GTX 1060", {title: "GEFORCE GTX 1060", points:["Memory: 6 GB GDDR5", "Memory Speed: 8.0 Gbps", "Base Clock (MHz): 1506", "Boost Clock (MHz): 1708", "CUDA Cores: 1280", "Graphics Card Power: 120W"]}],
        g1070: [100, "GEFORCE GTX 1070", {title: "GEFORCE GTX 1070", points:["Memory: 8 GB GDDR5", "Memory Speed: 8.0 Gbps", "Base Clock (MHz): 1607", "Boost Clock (MHz): 1683", "CUDA Cores: 2432", "Graphics Card Power: 180W"]}],
        g1080: [110, "GEFORCE GTX 1080", {title: "GEFORCE GTX 1080", points:["Memory: 11 GB GDDR5X", "Memory Speed: 11 Gbps", "Base Clock (MHz): 1480", "Boost Clock (MHz): 1582", "CUDA Cores: 3584", "Graphics Card Power: 250W"]}],
        g1070: [170, "NVIDIA gtx 1070", {title: "", points:["Memory", "Memory Speed", "Base Clock (MHz)", "Boost Clock (MHz)", "CUDA Cores", "Graphics Card Power"]}],
        r2070: [200, "NVIDIA gtx 2070", {title: "", points:["Memory", "Memory Speed", "Base Clock (MHz)", "Boost Clock (MHz)", "CUDA Cores", "Graphics Card Power"]}],
        g1080: [350, "NVIDIA gtx 1080", {title: "", points:["Memory", "Memory Speed", "Base Clock (MHz)", "Boost Clock (MHz)", "CUDA Cores", "Graphics Card Power"]}],
        r2080: [380, "NVIDIA gtx 2080", {title: "", points:["Memory", "Memory Speed", "Base Clock (MHz)", "Boost Clock (MHz)", "CUDA Cores", "Graphics Card Power"]}]
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
    console.log("req received")
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
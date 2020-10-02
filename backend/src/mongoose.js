const mongoose = require('mongoose')

const connectionURL = "mongodb+srv://pcbBackend:Varshil007.@cluster0.bhomg.mongodb.net/pcbData?retryWrites=true&w=majority"
mongoose.connect(connectionURL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true })


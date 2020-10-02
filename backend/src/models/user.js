const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const modelSchema = {
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    }
}

const userSchema = new mongoose.Schema(modelSchema)

userSchema.pre('save', async function (next) {

    const user = this

    if (user.isModified){
        user.password = await bcrypt.hash(user.password, 8)
    }
    console.log("before saving")    

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
// move JWT token sign to environment variable
const sign = "Iwillchangethisanyway"

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
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7
    },
    tokens:[{
        token: {
            type: String,
            required: true
        }
    }]
}

const userSchema = new mongoose.Schema(modelSchema)

userSchema.methods.generateToken = async function (){
    const user = this
    token = jwt.sign({_id: user._id.toString(), name: user.fname}, sign)
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email: email});

    if (!user){
        throw new Error("unable to login!")
    }

    const authenticate = await bcrypt.compare(password, user.password)

    if (!authenticate){
        throw new Error("unable to login!")
    }

    return user
    
}

userSchema.pre('save', async function (next) {

    const user = this

    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
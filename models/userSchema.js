const mongoose=require('mongoose')

//schema for Users collection

const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
})

const Users=new mongoose.model('Users',userSchema)

module.exports=Users

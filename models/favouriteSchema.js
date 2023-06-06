const mongoose=require('mongoose')

const favouriteSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    id:{
        type:Number,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    poster:{
        type:String,
        required:true,
    }
})

const favourites=new mongoose.model('favourites',favouriteSchema)
module.exports=favourites
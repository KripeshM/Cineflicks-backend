const mongoose=require('mongoose')

const watchlistSchema=new mongoose.Schema({
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

const watchlists=new mongoose.model('watchlists',watchlistSchema)
module.exports=watchlists
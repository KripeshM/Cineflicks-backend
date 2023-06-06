const mongoose=require('mongoose')


//schema for movies collection

const movieSchema= new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    release_date:{
        type:String,
        required:true
    },
    director:{
        type:String,
        required:true
    },
    actors:{
        type:Array,
        required:true
    },
    genre:{
        type:Array,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    plot:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    trailer:{
        type:String,
        required:true
    },
    duration:{
        type:String,
        required:true
    },
    reviews:[
        {
            username:{
                type:String,
                required:true  
            },
            review:{
                type:String,
                required:true 
            },
            date:{
                type:String,
                required:true 
            }
        }
        
    ]
})

const movies=new mongoose.model('movies',movieSchema)
module.exports=movies
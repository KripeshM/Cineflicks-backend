const movies=require('../models/movieSchema')

exports.getallmovies=async (req,res)=>{
    try{
        const allMovies=await movies.find()
        res.status(200).json(allMovies)
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.viewmovie=async (req,res)=>{
    const {id}=req.params
    try{
        const movie=await movies.findOne({id})
        if(movie){
            res.status(200).json(movie)
        }
        else{
            res.status(404).json("Not found")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
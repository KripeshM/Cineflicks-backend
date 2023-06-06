const favourites=require('../models/favouriteSchema')

exports.addtofavourite=async(req,res)=>{
    const {username,id,title,poster}=req.body

    try{
        const movie=await favourites.findOne({username,id})
        console.log(movie);
        if(movie){
            res.status(403).json("Movie already exist in favourites")
        }
        else{
            const newMovie=new favourites({username,id,title,poster})
            // console.log(newMovie);
            // console.log("before saving");
            await newMovie.save()
            // console.log("after saving");
            res.status(200).json("Movie added to favourites")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.getfavourite=async (req,res)=>{
    const {username}=req.params
    try{
        const allmovies=await favourites.find({username})
        if(allmovies){
            res.status(200).json(allmovies)
        }
        else{
            res.status(404).json("Empty watchlist")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}

exports.removefavouritemovie=async (req,res)=>{
    const {username,id}=req.params
    try{
        const removedmovie=await favourites.deleteOne({username,id})
        if(removedmovie.deleteCount!=0){
            const allmovies=await favourites.find({username})
            res.status(200).json(allmovies)
        }
        else{
            res.status(404).json("Item not present")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
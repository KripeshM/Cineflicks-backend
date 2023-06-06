const watchlists=require('../models/watchlistSchema')


exports.addtowatchlist=async(req,res)=>{
    const {username,id,title,poster}=req.body

    try{
        const movie=await watchlists.findOne({username,id})
        if(movie){
            res.status(403).json("Movie already exist in watchlist")
        }
        else{
            const newMovie=new watchlists({username,id,title,poster})
            // console.log(newMovie);
            // console.log("before saving");
            await newMovie.save()
            // console.log("after saving");
            res.status(200).json("Movie added to watchlist")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}


exports.getwatchlist=async (req,res)=>{
    const {username}=req.params
    try{
        const allmovies=await watchlists.find({username})
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


exports.removewatchlistmovie=async (req,res)=>{
    const {username,id}=req.params
    try{
        const removedmovie=await watchlists.deleteOne({username,id})
        if(removedmovie.deletedCount!=0){
            const allmovies=await watchlists.find({username})
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

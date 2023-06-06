const movies = require('../models/movieSchema')
const Users = require('../models/userSchema')

exports.postreview = async (req, res) => {
    const { username, id, review, date } = req.body
    // console.log(username,id,review,date);
    try {
        const movie = await movies.findOne({ id })
        console.log(movie);
        if (movie) {
            console.log("inside first if");
            let flag = 0;
            for (let rev of movie.reviews) {
                if (rev.username == username) {
                    console.log("inside second if");
                    flag = 1;
                    break
                }
            }
            if (flag == 1) {
                res.status(403).json("You have already reviewed this movie")
            }
            else {
                movie.reviews.push({
                    username,
                    review, date
                })
                await movie.save()
                res.status(200).json("Your review added successfully")
            }

        }
        else {
            res.status(404).json("Movie not found")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }

}


exports.deletereview=async (req,res)=>{
    const {username,id}=req.params

    try{
        const movie=await movies.findOne({id})
        if(movie){
            console.log("first if");
            movie.reviews=movie.reviews.filter(rev=>rev.username!=username)
            await movie.save()
            res.status(200).json("Your review deleted successfully")
        }
        else{
            res.status(404).json("Movie not found")
        }
    }
    catch(error) {
        res.status(401).json(error)
    }
}

exports.getreview=async (req,res)=>{
    const {username,id}=req.params
    try{
        const movie=await movies.findOne({id})
        if(movie){
            for(let rev of movie.reviews){
                if(rev.username==username){
                    res.status(200).json(rev)
                }
            }
        }
        else{
            res.status(404).json("Movie not found")
        }
    }
    catch(error) {
        res.status(401).json(error)
    }
}


exports.editreview=async (req,res)=>{
    const {username,id,review,date}=req.body
    try{
        const movie=await movies.findOne({id})
        if(movie){
            for(let rev of movie.reviews){
                if(rev.username==username){
                    rev.review=review
                    rev.date=date
                }
            }
            await movie.save()
            res.status(200).json("Review edited successfully")
        }
        else{
            res.status(404).json("Movie not found")
        }
    }
    catch(error) {
        res.status(401).json(error)
    }
}
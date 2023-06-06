const Users=require('../models/userSchema')


exports.register=async(req,res)=>{

    const {email,username,password}=req.body

    try{
        const user=await Users.findOne({username})
        if(user){
            res.status(403).json("Username already exists")
        }
        else{
            const newUser=new Users({email,username,password})

            await newUser.save()
            res.status(200).json("Registered Successfully")
        }
    }
    catch(error){
        res.status(401).json(error)
    }
}
const Users = require('../models/userSchema')
const jwt=require('jsonwebtoken')

exports.login = async (req, res) => {

    const { username, password } = req.body

    try {
        const user = await Users.findOne({ username, password })
        if (user) {
            const token=jwt.sign({username:username},'superkey2023')
            // console.log(user.username);
            response={
                token,
                user
            }
            res.status(200).json(response)
            
        }
        else {
            res.status(401).json("Invalid data")
        }
    }
    catch (error) {
        res.status(401).json(error)
    }

}

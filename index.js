//automatically load .env file into our project
require('dotenv').config()

//import express
const express=require('express')

//import cors
const cors=require('cors')

//import db
require('./db/connection')

//import router
const router=require('./routes/router')

//create a server app
const server=express()


const PORT=5000

//use in server application
server.use(cors())
server.use(express.json())
server.use(router)

//server.get('/',(req,res)=>{
//     res.status(200).json("cineflicks service response")
// })




//to run the server
server.listen(5000,()=>{
    console.log("listening to the port "+PORT);
})

// module.exports=server


//application specific middleware
// const appMiddleware=(req,res,next)=>{
//     console.log("app specific middleware");
// }

// //use app specific middleware
// server.use(appMiddleware)
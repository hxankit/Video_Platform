// require('dotenv').config({path:'./env'})
import mongoose from 'mongoose';
import { DB_NAME } from './constrants.js';   // database c onnection 
import connectdb from './db/db.js'; // here we are importing the database connection file 
import dotenv from 'dotenv'   // connectinh the environment variable file 
dotenv.config({path:'./.env'})  // here we configure the path of environment variable  




connectdb()   //here we only call the fuction which is imported fom db.js fromm db directory 
.then(
    app.listen(process.env.PORT || 8080,()=>{
        console.log(`server is running on ${Process.env.PORT}`)
    })
)
.catch((err)=>{
    console.log("mongo db connection faild",err)
})








/*
import express from "express";
const app =express();;
function connectdb(){} //here be can make a function of connection of db
;(async () => {
    try {
        await mongoose.connect(`${procces.env.MONGODB_URL}/${DB_NAME}`)
        application.on("error",(error)=>{
            console.log("error",error)
            throw error
        })


        application.listen(process.env.PORT,()=>{
            console.log(`App listen on port ${process.env.PORT}`)
        })

    }catch(error){
        console.log("error:",error);
        throw err
    }

    }

)()
    */
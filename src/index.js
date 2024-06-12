// require('dotenv').config({path:'./env'})
import mongoose from 'mongoose';
import { DB_NAME } from './constrants.js';
import connectdb from './db/index.js';
import dotenv from 'dotenv'


dotenv.config({
    path:'./.env'
})

connectdb()









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
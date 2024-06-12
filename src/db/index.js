import mongoose from "mongoose";
import { DB_NAME } from "../constrants.js";
const connectdb = async () =>{
    try{
        const connectionInstance=await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`\n Mongodb Connected DB HOST ${connectionInstance.connection.host}`)
    }catch(error){
        console.log("mongodb connection error",error);
        process.exit(1)
    }
}

export default connectdb
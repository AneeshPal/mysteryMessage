import mongoose from "mongoose";
import { Connection } from "mongoose";

type ConnectionObject={
    isConnected?:number // ? represent ki value aa bhi skti h or nhi bhi 
}

const connection:ConnectionObject={}

async function dbConnect():Promise<void>{
    if(connection.isConnected){  // next.js is  framework so to avoid database choking as mongodb allows multiple db connection
        console.log("ALready connected to database");
        return
    }

    try{
        const db=await mongoose.connect(process.env.MONGODB_URI 
                     || '',{})

        Connection.isConnected=db.connections[0].readyState
        console.log("Database Connected Successfully")

    } catch(error){
        console.log("Database connection failed",error)
        process.exit(1)
    }
}

export default dbConnect;

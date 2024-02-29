import mongoose from "mongoose";

export async function dbconn() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        const connection = mongoose.connection

        // connection.on('connected', () => {
        //     console.log("connected to mongodb")
        // })
        
    } catch (error) {
        console.log(error)
    }
}
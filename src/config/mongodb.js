import mongoose from "mongoose";


const connectDB=async()=>{
    mongoose.connection.on("connected",()=>{
        console.log("dbconncted")
    })
    await mongoose.connect(`mongodb+srv://15072cm031:Vineeth123@cluster0.rk9pc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
}


export default connectDB;

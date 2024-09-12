import {v2 as cloudinary} from "cloudinary";


const connectCloudinary=async()=>{
    
    await cloudinary.config({
    cloud_name:"dj2tk6c0s",
    api_key:"428588247961668",
    api_secret:"kBZXCzxk9R4ZqANSfGxIrkiuhLQ"


})
}


export default connectCloudinary;
import mongoose from "mongoose";

const connectMongoDB =async () =>{
    try {
         await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to mongoDb")
    } catch (error) {
        console.log(error)
    }
};

export default connectMongoDB;






// const connectMongoDB = async () => {
//     if (mongoose.connections[0].readyState) {
//         return;
//     }

//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log("Connected to MongoDB");
//     } catch (error) {
//         console.log(error);
//     }
// };

// export default connectMongoDB;
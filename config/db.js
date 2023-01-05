import mongoose from "mongoose";


const conectarDb = async () => {
    
    try {
       await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        )

    } catch (error) {
        console.log(error)
        process.exit(1)
        
    }

  
}



export default conectarDb;
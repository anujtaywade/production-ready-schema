const mongoose = require('mongoose')

const connectDB = async()=>{
    try {
        const conn = mongoose.connect(process.env.MONGO_URL,{
            useNewPraser : true ,
            useUnifiedTopology : true ,
        })
        console.log(`MongoDB connected ${(await conn).connection.host}`)
    } catch (error) {
        console.log(`Error in connecting to DB ${}`)
    }
}
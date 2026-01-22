const mongoose  = require("mongoose");
const bcrypt = require("bcrypt")


const userSchema = mongoose.Schema({
    name : {
        type : String,
        require : true ,
        trim : true
    } ,

    email : {
        type : String ,
        require : true ,
        unique : true,
        lowercase : true ,
        trim : true ,
    } ,

    password : {
        type : String ,
        require : true ,
        minlength : 8 ,
    } ,
    
}, {Timestamp : true})


userSchema.method.matchpassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password)
}

module.exports = mongoose.model("user",userSchema)
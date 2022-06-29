var mongoose=require("mongoose");
function getUserModel()
{
    var UserSchemaObj= new mongoose.Schema({
        user_name:{type:String},
        user_address:String,
        tsize:String,
        fsize:String,
        asize:String,
        amount:String
    });
    var userModel=mongoose.model("SNSColl",UserSchemaObj);
    return userModel;
}
module.exports=getUserModel;
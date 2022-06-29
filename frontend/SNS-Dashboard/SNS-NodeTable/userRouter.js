var express=require("express");
var path=require("path");
var bcrypt=require("bcrypt");
var mongoose= require('mongoose');
var app=express.Router();
app.use(express.urlencoded({extended:false}));
// const dbConfig="mongodb+srv://admin:<password>@cluster0.lvaji.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(dbConfig).then(()=>{
//     console.log("connected");
// }).catch((err)=>{
//     console.log(err);
// })
var UserSchemaObj=new mongoose.Schema({
    uid : String,
    pwd : String,
    mob: String,
    dos: {type:Date,default:Date.now }
});

var userModel=mongoose.model("SNSColl",UserSchemaObj);

app.post("/showall",(req,resp)=>{
    userModel.find()
    .then((result)=>{
        resp.json(result);
    })
    .catch((err)=>{
        resp.json({errmsg:err});
    })
})


var userModel=mongoose.model("SNSColl",UserSchemaObj);
module.exports=app;
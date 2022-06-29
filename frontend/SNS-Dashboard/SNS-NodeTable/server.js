const express=require("express");
var bodyparser=require("body-parser");
var cors=require("cors");
var mongoose= require("mongoose");
var app=express();
app.use(express.static("public"));
app.use(cors());
app.use(express.urlencoded({ extended:true }));
const dbConfig="mongodb+srv://admin:admin123@cluster0.lvaji.mongodb.net/SNSS"
mongoose.connect(dbConfig).then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log(err);
})
//var routeUser=require("./userRouter");
//app.use("/" ,routeUser);
app.listen(3001,()=>{console.log("Listening");})
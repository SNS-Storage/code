var path=require("path");
var uModel=require(path.join(__dirname,"..","models","user.model.js"));
var userModel=uModel();
async function createUser(req,resp){
    console.clear();
    console.log(req.query);
    await userModel.create(req.query,(err,result)=>{
        if(err)
        {
            resp.send(err);
            return;
        }
        resp.set("json");
        resp.json({"msg":"Record Inserted..."});
        console.log(result);
    });
}
var doFetchAll=(req,resp)=>{
    userModel.find()
    .then((result)=>{
        resp.json(result);
    })
    .catch((err)=>{
        resp.json({errmsg:err});
    })
}
}
module.exports={createUser,doFetchAll}; 
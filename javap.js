var express = require("express");
var path = require("path")
var bodyparser =  requier("body-parser")
var app = express()
var mongoose = require("mongoose")
mongoose.connect("mongodb+srv://atal8:<atal8>@cluster0.aeuaeke.mongodb.net/?retryWrites=true&w=majority")

var user3=new Schema({
    name:{type:String,require:true},
    time:{type:Number,require:true},
    discribtion:{type:String,require:true}
})

var publicfolder = path.join(__dirname,"public");

app.use(express.static(publicfolder));
app.use(bodyparser.urlencoded({extended:true}))

app.get("",(req,res)=>{
    res.render(publicfolder, "newexp.html", "/l8lp");
})

app.post("l8lp.html",(req,res)=>{
    var user = new user3({name:req.body.username,time:req.body.age,name:req.body.dis});


user.save().then(newUser =>{
    res.send("creaetd new exp successfully!")
}).catch(err =>{
    res.send("somthing is wrong")
})
});
app.listen(3000,() =>{
    console.log("woooo")
})
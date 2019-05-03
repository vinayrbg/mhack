const user = require('../models/user.model');

exports.register = function (req,res){
    var newUser = new user(req.body);
    newUser.save()
    .then((doc)=>{
        res.sendStatus(200)
    })
    .catch((err)=>{
        console.log(err)
        res.sendStatus(500)
    })
}

exports.login = function (req,res){
    user.find({ $and: [ {userId:req.body.userId},{password:req.body.password} ] })
    .then((doc)=>{
        res.status(200).send("Success!!")
    })
    .catch((err)=>{
        res.sendStatus(500)
    })
}
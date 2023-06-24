const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require('path');
const userModel = require("./models/user");

app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',function(req,res){
  res.render('index')
})
app.post('/create',function(req,res){
    userModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        username: req.body.username
    })
    .then(function(createduser){
       res.redirect('/')
    })
})
app.get('/read',function(req,res){
    userModel.find()
    .then(function(alldata){
        res.render('index2', {alldata})
    })
})
app.get('/delete/:id',function(req,res){
    userModel.findOneAndDelete({id:req.params.id},{new:true})
    .then(function(deleteduser){
        res.redirect('/read')
    })
})
app.listen(3000);
var express = require('express');
var app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer= require('multer');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const uri='mongodb+srv://thanhct:main0607@cluster0.rdak5hj.mongodb.net/dbSanPham?retryWrites=true&w=majority';
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


var apicomic= require('./Api/apiComic');
app.use('/api/comic',apicomic);



app.listen(8000,function() {
    console.log("Server is running on port 8000");
});
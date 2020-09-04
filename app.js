const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mongoose =require('mongoose');
const cors =require('cors')

//middleware
app.use(bodyParser.json());
app.use(cors());


//Routes
app.get('/', (res, req)=>{
    req.send('We are at our Own home');
});



//Import routes
const postsRoute= require('./routes/posts');
const router = require('./routes/posts');


//middleware
app.use('/posts', postsRoute);


//connection to db
mongoose.connect('mongodb://localhost:27017/React_First');


//on db connection
mongoose.connection.on('connected', ()=>{
    console.log('Connected to database mongodb @ 27017 port');
});






//How to start listing to server

app.listen(3000);
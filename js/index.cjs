const path = require('path')
const morgan = require('morgan')
const mongoose = require('mongoose')

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const PORT = 3000;
const db = 'mongodb+srv://admin:EneOEztnO334d@cluster0.cflmodt.mongodb.net/products?retryWrites=true&w=majority'

mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res)=> console.log('Connect to DB'))
    .catch((err)=> console.log(err));


app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, (err) =>{
    if (err){
        return console.log(err);
    }
    console.log('Server ok')
});

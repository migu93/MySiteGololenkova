const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('./models/post.cjs');
const {validation} = require('./validations/auth.js')

const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const PORT = 3000 || 80;

const db = 'mongodb+srv://admin:EneOEztnO334d@cluster0.cflmodt.mongodb.net/products?retryWrites=true&w=majority'

mongoose.set('strictQuery', true);
mongoose
    .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((res)=> console.log('Connect to DB'))
    .catch((err)=> console.log(err));

const createPath = (page) => path.resolve(__dirname, 'ejs-views', `${page}.ejs`);

app.listen(PORT, (err)=>{
    err ? console.log(err) : console.log(`listening port ${PORT}`);
})

app.use(express.json());
app.post('/auth/register', (req, res) =>{

})

app.get('/', (req, res) => {
    res.send('Hello world');
})

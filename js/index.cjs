const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Post = require('./models/post.cjs');

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

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
app.use(express.urlencoded({extended: false}));
app.use(express.static('styles'));

app.get('/', (req, res) =>{
    const title = 'Home';
    res.render(createPath('index'), {title});
})

app.post('/add-post', (req, res)=>{
    const {title, author, text} = req.body;
    const post = new Post({title, author, text});
    post.save().then((result)=>{
        res.send(result )
    })
        .catch((err) => {
            console.log(err);
            res.render(createPath('error'), {title: 'Error'});
        })
})

app.get('/posts/:id', (req, res)=>{
    const title = 'Post';
    const post = {
        id: '1',
        text: 'lorem isdiuf sdiu fisdou fsd fiosduf fusdoiuf',
        title: 'Post title',
        date: '08.12.2022',
        author: 'Nikita',
    };
    res.render(createPath('post'), {title, post});
})

app.get('/', (req, res) => {
    res.send('Hello world');
})

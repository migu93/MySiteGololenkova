const mongoose = require('mongoose');
const {Schema, models} = require("mongoose");
const schema = mongoose.Schema;

const postSchema = new Schema({
    text:  {
        type: String,
        required: true,
    },
    title:  {
        type: String,
        required: true,
    },
    date:  {
        type: String,
        required: true,
    },
    author:  {
        type: String,
        required: true,
    },
}, { timestamps: true})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
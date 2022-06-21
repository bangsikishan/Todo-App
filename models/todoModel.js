const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// CREATING SCHEMA
const todoSchema = new Schema({
    todo: {
        type: String,
        required: true
    }
}, { timestamps: true });


// CREATING MODEL BASED ON THE SCHEMA - NAME IS SINGULAR
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;
const Todo = require('../models/todoModel');


// CREATE FUNCTIONS FOR DIFFERENT ROUTES
const get_todo_home = (req, res) => {
    Todo.find()
        .limit(3)
        .then(todos => res.render('index', { title: 'Home', lists: todos }))
        .catch(error => console.log(error));
}

const get_todo_all = (req, res) => {
    Todo.find()
        .then(todos => res.render('todos', { title: 'All Todos', lists: todos }))
        .catch(error => console.log(error));
}

const get_form_data = (req, res) => {
    let todo = new Todo(req.body);

    todo.save()
        .then(() => res.redirect('/'))
        .catch(error => console.log(error));
}


const delete_todo = (req, res) => {
    let id = req.params.id;

    Todo.findByIdAndDelete(id)
        .then(() => res.json({redirect: '/todos'}))
        .catch(error => console.log(error));
}


// EXPORT FUNCTIONS
module.exports = {
    get_todo_home,
    get_todo_all,
    get_form_data,
    delete_todo
}
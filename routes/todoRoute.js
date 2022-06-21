const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// ROUTES
router.get('/', todoController.get_todo_home);
router.get('/todos', todoController.get_todo_all);
router.post('/', todoController.get_form_data);
router.delete('/todos/:id', todoController.delete_todo);

// EXPORT ROUTES
module.exports = router;
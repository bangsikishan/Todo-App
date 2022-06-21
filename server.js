require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/todoRoute');

// CREATE AN EXPRESS APP
const app = express();


// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



// CONNECT TO THE MONGODB - ASYNCHRONOUS TASK
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('[+] Connected to the database');
        app.listen(process.env.PORT, () => console.log(`[+] Listening on port: ${process.env.PORT}`));
    })
    .catch(error => console.log(error));


// USE ROUTES DEFINED IN THE `todoRoute.js` file
app.use(router);

app.use((req, res) => {
    res.render('404', { title: '404' });
});
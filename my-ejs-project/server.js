const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// Routes for each page
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/linux', (req, res) => {
    res.render('linux');
});

app.get('/git', (req, res) => {
    res.render('git');
});

app.get('/preinternet', (req, res) => {
    res.render('preinternet');
});

app.get('/internet', (req, res) => {
    res.render('internet');
});

app.get('/web1', (req, res) => {
    res.render('web1');
});

app.get('/web2', (req, res) => {
    res.render('web2');
});

app.get('/webaccessibility', (req, res) => {
    res.render('webaccessibility');
});

app.get('/futureofinternet', (req, res) => {
    res.render('futureofinternet');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('index', { title: 'Student Survival Guide', message: 'Welcome to the Guide!' });
});

app.get('/linux', (req, res) => {
    res.render('linux', { title: 'Linux Commands' });
});

app.get('/git', (req, res) => {
    res.render('git', { title: 'Git Commands' });
});

app.use(express.static('public'));

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

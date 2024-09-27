const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can change the port if needed

// Serve static files from the "docs" directory
app.use(express.static(path.join(__dirname, 'docs')));

// Set up a route to handle other requests
app.get('/', (req, res) => {
  res.sendFile(__dirname, 'docs', 'index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

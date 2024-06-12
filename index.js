const express = require('express');
const app = express();
const PORT = 8000;

// Middleware untuk parsing JSON dan URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route utama (/)
app.get('/', (req, res) => {
  res.send('OK'); 
});

// Mulai server
app.listen(PORT, () => {
  console.log('Server is listening on port', PORT);
});
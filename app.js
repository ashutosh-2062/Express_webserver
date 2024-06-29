const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  next();
});

// Route to respond to GET requests at /
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Route to respond to POST requests at /users
// app.post('/users', (req, res) => {
//   const { name, email } = req.body;
//   res.send(`User created: ${name} (${email})`);
// });

// Route to respond to GET requests at /users
app.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Rohit Sharma', email: 'rohit@example.com' },
    { id: 2, name: 'Virat Kholi', email: 'virat@example.com' },
  ];
  res.json(users);
});

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send('Internal Server Error');
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 3001; // You can choose a different port

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'your_username', // SQL username
  host: 'localhost', // SQL host
  database: 'your_database_name', // Database name
  password: 'your_password', // SQL password
  port: 5432, // SQL port
});

// Middleware to parse JSON request bodies
app.use(express.json());

// Example API endpoint (replace with your actual logic)
app.post('/api/data', async (req, res) => {
  try {
    const { name, email } = req.body; // Assuming you have 'name' and 'email' fields in your form

    // SQL query to insert data
    const query = 'INSERT INTO your_table (name, email) VALUES ($1, $2) RETURNING *';
    const values = [name, email];

    const result = await pool.query(query, values);

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
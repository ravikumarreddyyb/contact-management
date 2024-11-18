const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 5000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '7093805291',
  database: 'contact_db',
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL Database!');
});

app.use(cors());
app.use(bodyParser.json());

// Get all contacts
app.get('/contacts', (req, res) => {
  db.query('SELECT * FROM contacts', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// Add new contact
app.post('/contacts', (req, res) => {
    const { first_name, last_name, email, phone, company, job_title } = req.body;
    const sql = 'INSERT INTO contacts (first_name, last_name, email, phone, company, job_title) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [first_name, last_name, email, phone, company, job_title], (err) => {
      if (err) return res.status(500).send(err);
      res.send('Contact added successfully');
    });
  });
  

// Update a contact
app.put('/contacts/:id', (req, res) => {
    const { first_name, last_name, email, phone, company, job_title } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE contacts SET first_name = ?, last_name = ?, email = ?, phone = ?, company = ?, job_title = ? WHERE id = ?';
    db.query(sql, [first_name, last_name, email, phone, company, job_title, id], (err) => {
      if (err) return res.status(500).send(err);
      res.send('Contact updated successfully');
    });
  });
  

// Delete a contact
app.delete('/contacts/:id', (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM contacts WHERE id = ?';
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).send(err);
    res.send('Contact deleted successfully');
  });
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));

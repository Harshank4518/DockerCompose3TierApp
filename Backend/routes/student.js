const express = require('express');
const router = express.Router();
const db = require('../db');

router.post('/add', (req, res) => {
  const { name, email, age, course } = req.body;
  const sql = 'INSERT INTO students (name, email, age, course) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, age, course], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send({ message: 'Student added successfully' });
  });
});

module.exports = router;

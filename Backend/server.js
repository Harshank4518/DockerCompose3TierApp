const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoutes = require('./routes/student');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/student', studentRoutes);

app.listen(3000, () => {
  console.log(`Server running on http://${process.env.HOST}:${process.env.PORT}`);
});
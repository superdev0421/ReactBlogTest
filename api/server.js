/**
==========================================
 Title:  Tournament Item
 Author: Edward
 Date:   18 August 2022
==========================================
 */

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const PORT = 4000;

const data = require('./db');
const createTournament = require('./createTournament');
const dbroute = require('./router');


// Database Initializing
for (let i = 0; i < 8; i++) {
  data.tournaments.push(createTournament());
}
console.log('Database Initialized!');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Server is Running');
});

// Router
app.use('/tournaments', dbroute);

app.listen(PORT, () => {
  console.log(`Server running on localhost:4000`);
});

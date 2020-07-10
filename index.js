require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const port = 3001;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(cors());
app.options('*', cors());

const routes = require('./routes');

// app.use('/logger', routes);

const mongoose = require('mongoose');
const Record = require('./models/record');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
    Record.find((err, records) => {
        if (err) return console.error(err);

        console.log(records);
    });
});

app.get('/', (req, res) => {
   res.send('Hi!');
});

app.listen(port, () => console.log('Logger!'));
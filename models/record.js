const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    id: Number
});

const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codial_developement');

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error coonnecting to MongoDb"));

db.once('open', function(){
    console.log("Connected to database : MongoDb");
})

module.exports = db;
const { connect, connection } = require('mongoose');

const connectionString = 'mongodb://127.0.0.1:27017/gighubDB';

connect(connectionString).then(console.log('Connected to Database'));

module.exports = connection;





/* ALTERNATIVE CONNECTION METHOD
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/gighubDB');

module.exports = mongoose.connection;
*/
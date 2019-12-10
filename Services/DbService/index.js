const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

const url = 'mongodb://localhost:27017';
const dbName = 'adminAuth';
const Client = new MongoClient(url, { useNewUrlParser: true});

async function dbConnector() {
    let db = await Client.connect();
    db = Client.db(dbName);
    return db;
}


module.exports = dbConnector;

require('dotenv').config();
const {MongoClient} = require('mongodb');
const uri = process.env.MONGODB_URI;



let db;

const initDB = async () => { 
    if (db) {
        console.log('DB Already Initialized!')
        return db;
    }

    try {
        const client = new MongoClient(uri);

        await client.connect();
        db = client.db(process.env.DB_NAME);
        console.log(db.collection('contacts'))
        console.log(`Connected Succesfully to DB: ${db.namespace}`);
        return db;

    } catch (error) {
        console.error("Error connecting to DB", error);
    }
};

module.exports = initDB;
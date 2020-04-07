const mongoClient = require('mongodb').MongoClient;

const { mongoUrl, dbName } = require('./config');
const UUID = require('mongodb').UUID;
const mongoOption = {useNewUrlParser:true, useUnifiedTopology: true};

const state = {
    db: null,
    client: null
}

const connect = (cb) => {
    if(state.null) {
        cb();
    }
    else {
        mongoClient.connect(mongoUrl, mongoOption, (err, client) => {
            if(err) {
                cb(err);
            }
            else {
                console.log("Connected to Database!!");
                state.db = client.db(dbName);
                state.client = client;
                cb();
            }
        })
    }
}

const getDb = () => {
    return state.db
}

const close = () => {
    console.log("COnnection Off!!");
    return state.client.close();
}

const clientRaw = () => {
    return state.client;
}

module.exports = { connect, getDb, close, clientRaw };
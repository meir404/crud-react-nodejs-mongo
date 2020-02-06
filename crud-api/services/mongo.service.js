

var db

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://as:qwe~123@cluster0-r8m6z.azure.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });

exports.init = function () {
    client.connect(err => {
        if (err) return console.log('error mongo ', err)
        db = client.db("crud-mongo");
        // client.close();
    });
}

exports.get = function (collection) {
    return new Promise((resolve, reject) => {
        db.collection(collection).find().toArray(function (err, results) {
            if(results) resolve(results);
            else if(err) reject(err);
        });
    })
}
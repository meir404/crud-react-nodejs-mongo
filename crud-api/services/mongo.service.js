

var db

const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
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
            if (results) resolve(results);
            else if (err) reject(err);
        });
    })
}

exports.save = function (collection, obj) {
    return new Promise((resolve, reject) => {
        db.collection(collection).insert(obj, { w: 1 }, function (err, records) {
            if (err) reject(err);
            resolve(records.ops);
        });
    })
}
exports.update = function (collection, obj) {
    return new Promise((resolve, reject) => {
        let id = obj._id;
        delete obj._id;
        db.collection(collection).updateOne({ _id: ObjectId(id) }, { $set: obj }, function (err, records) {
            if (err) reject(err);
            resolve(records.result.ok === 1 ? { ok: true } : {});
        });
    })
}
exports.delete = function (collection, obj) {
    return new Promise((resolve, reject) => {
        db.collection(collection).deleteOne({ _id: ObjectId(obj.id) }, function (err, records) {
            if (err) reject(err);
            resolve(records.result.ok === 1 ? { ok: true } : {});
        });
    })
}
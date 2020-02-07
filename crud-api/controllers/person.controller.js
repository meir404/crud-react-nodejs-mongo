
const mongo = require('../services/mongo.service');
const collection = 'persons';


exports.save = function (req, res) {
    mongo.save(collection, req.body).then(r => res.json(r)).catch(e => res.json(e));
}
exports.get = function (req, res) {
    mongo.get(collection).then(r => res.json(r)).catch(e => res.json(e));
}
exports.update = function (req, res) {
    mongo.update(collection, req.body).then(r => res.json(r)).catch(e => res.json(e));
}
exports.remove = function (req, res) {
    mongo.delete(collection, req.query).then(r => res.json(r))
        .catch(e => {
            console.log(e);
            res.json({ error: JSON.stringify(e) });
        });
}
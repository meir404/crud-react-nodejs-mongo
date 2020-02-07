
const mongo = require('../services/mongo.service');
const collection = 'professions';


exports.get = function (req, res) {
    mongo.get(collection).then(r => res.json(r)).catch(e => res.json(e));
}
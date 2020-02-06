
const mongo = require('../services/mongo.service');

exports.save = function (req, res) {
    console.log(req.body);
    sqlService.STPGet('stp_login', req.body).then(d => {
        res.json(d);
    });
}

exports.get = function (req, res, next) {
    mongo.get('persons').then(r => res.json(r)).catch(e => res.json(e));
}
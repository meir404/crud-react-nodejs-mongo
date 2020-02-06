

const express = require('express');
var cors = require('cors')
const bodyParser = require('body-parser');
const mongo = require('./services/mongo.service')
const app = express();

mongo.init();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

var routes = require('./routes/routes'); //importing route
routes(app);

app.listen(5600, function () {
    console.log('listening on 5600')
})
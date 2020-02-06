


module.exports = function (app) {
    var personController = require('../controllers/person.controller');
  
    app.route('/persons')
      .post(personController.save).get(personController.get);
  
  };
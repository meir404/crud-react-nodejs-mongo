


module.exports = function (app) {
  var personController = require('../controllers/person.controller');
  var professionsController = require('../controllers/professions.controller');

  app.route('/persons')
    .put(personController.update)
    .delete(personController.remove)
    .post(personController.save)
    .get(personController.get);



  app.route('/professions')
    .get(professionsController.get);

};
var models  = require('../models');
var express = require('express');
var router = express.Router();

/* POST user creation. */
// router.post('/create', function(req, res) {
//   models.User.findOne({
//     where: {
//       id: req.body.id
//     }
//   }).then(function(result){
//     if(result == null){
//       models.User.create({
//         id: req.body.id,
//         name: req.body.name
//       }).then(function() {
//         res.redirect('/');
//       });
//     }
//   });
// });

// /* GET user destroyed. */
// router.get('/:user_id/destroy', function(req, res) {
//   models.User.destroy({
//     where: {
//       id: req.params.user_id
//     }
//   }).then(function() {
//     res.redirect('/');
//   });
// });

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('student_detail', {
    title: 'Your Personal Information',
  });
});

module.exports = router;

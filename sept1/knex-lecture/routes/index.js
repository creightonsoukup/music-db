var express = require('express');
var router = express.Router();
var query =  require('../database/query')

/* GET home page. */
router.get('/', function(req, res, next) {
  query.Houses()
  .then(function(data) {
    res.send(data);
  })
});

router.get('/students', function (req, res, next) {
  query.Students()
  .then(function (data) {
    res.send(data)
  })
});

router.get('/patronus', function (req, res, next) {
  query.Potronus()
  .then(function (data) {
    res.send(data)
  })
});

router.get('/students/:name', function (req, res, next) {
  var name = req.params.name
  query.getStudentByName(name)
  .then(function (data) {
    res.render('student', {
      data: data[0]
    })
  })
  .catch(function(err) {
    return next(err);
  })
});

router.get('/newstudent/:name/:house_id/:year/:patronus',
  function (req,res,next) {
    var name = req.params.name,
        house_id = req.params.house_id,
        year = req.params.year,
        patronus = req.params.patronus;

    query.insertNewStudent(name,house_id,year,patronus)
    .then(function() {
      res.redirect('/')
    })
    .catch(function(err) {
      return next(err);
    })
  })

router.get('/students/delete/:name', function (req,res,next) {
  var name = req.params.name;

  query.deleteStudent(name)
  .then(function() {
    res.redirect('/')
  })
  .catch(function(err){
    return next(err)
  })
})
module.exports = router;

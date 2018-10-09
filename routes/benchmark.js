var express = require('express');
var router = express.Router();
var benchmarksYaml = require('../utils/data/benchmarks-parser');


/* GET benchmark page. */
router.get('/:id', function (req, res) {
  var benchmarks = benchmarksYaml.getBenchmarks();

  var id = req.params.id;
  console.log('does benchmarks.find exist: ' + benchmarks.find != undefined);
  var benchmark = benchmarks.find(function (benchmark) {
    return benchmark.id == id;
  });
  if (benchmark == undefined) {
    res.render('pages/error.ejs', {message: 'That benchmark does not exist!', error: {
      status: id + ' was not found in benchmarks',
      stack: ''
    }});
  } else {
    res.render('pages/benchmark', {title: 'Benchmark: ' + benchmark.name, benchmark: benchmark});
  }
  // TODO: also grab solution data by benchmark key
});

module.exports = router;

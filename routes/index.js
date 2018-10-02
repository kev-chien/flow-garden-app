var express = require('express');
var router = express.Router();
var benchmarksYaml = require('../utils/data/benchmarks-parser');

var benchmarksData = benchmarksYaml.getBenchmarks();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Flow Garden Website', benchmarks: benchmarksData });
});

module.exports = router;

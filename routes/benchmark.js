var express = require('express');
var router = express.Router();
var benchmarksYaml = require('../utils/data/benchmarks-parser');

var testData = [
  {
    name: "inflow-no-control",
    description: "The goal of this benchmark is to examine how autonomous vehicles can be used to control traffic passing through a bottleneck/capacity drop.",
    yt_string: "Lggtw9AOH0A"
  },
  {
    name: "benchmark-2",
    description: "The goal of this benchmark is to examine how autonomous vehicles can be used to control traffic passing through a bottleneck/capacity drop.",
    yt_string: "Lggtw9AOH0A"
  },
  {
    name: "benchmark-3",
    description: "The goal of this benchmark is to examine how autonomous vehicles can be used to control traffic passing through a bottleneck/capacity drop.",
    yt_string: "Lggtw9AOH0A"
  }
];

var benchmarksData = benchmarksYaml.getBenchmarks();

/* GET benchmark page. */
benchmarksData.forEach(function(benchmark) {
  router.get('/' + benchmark.id, function (req, res, next) {
    res.render('pages/benchmark', {title: 'Benchmark: ' + benchmark.name, benchmark: benchmark});
    // TODO: also grab solution data by benchmark key
  });
});

module.exports = router;

var express = require('express');
var router = express.Router();

var testData = [
  {
    name: "inflow-no-control",
    description: "The goal of this benchmark is to examine how autonomous vehicles can be used to control traffic passing through a bottleneck/capacity drop.",
    video: null
  },
  {
    name: "benchmark-2",
    description: "The goal of this benchmark is to examine how autonomous vehicles can be used to control traffic passing through a bottleneck/capacity drop.",
    video: null
  },
  {
    name: "benchmark-3",
    description: "The goal of this benchmark is to examine how autonomous vehicles can be used to control traffic passing through a bottleneck/capacity drop.",
    video: null
  }
]

/* GET benchmark page. */
testData.forEach(function(benchmark) {
  router.get('/' + benchmark.name, function (req, res, next) {
    res.render('pages/benchmark', {title: 'Benchmark: ' + benchmark.name, benchmark: benchmark});
    // TODO: also grab solution data by benchmark key
  });
});

module.exports = router;

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

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/index', { title: 'Flow Garden Website', benchmarks: testData });
});

module.exports = router;

var yaml = require('js-yaml');
var fs   = require('fs');

/* Get benchmark documents, or throw exception on error
 */
function getBenchmarks() {
  var benchmarksData = [];
  var testFolder = __dirname + '/../../data/benchmarks';
  try {
    fs.readdirSync(testFolder).forEach(function (file) {
      var doc = yaml.safeLoad(fs.readFileSync(testFolder + '/' + file, 'utf8'));
      console.log(doc);
      doc.id = file;
      benchmarksData.push(doc);
    });
  } catch (e) {
    console.log(e);
  }
  return benchmarksData;
}

exports.getBenchmarks = getBenchmarks;

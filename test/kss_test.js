'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit
 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.kss = {
  setUp: function (done) {
    // setup here if necessary
    done();
  },
  dist: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/dist/section-1.html');
    var actual = grunt.file.read('test/tmp_dist/section-1.html');
    test.equal(actual, expected, 'should generate style guide.');
    test.done();
  },
  css: function (test) {
    test.expect(1);
    var expected = grunt.file.read('test/expected/css/style.css');
    var actual = grunt.file.read('test/tmp_css/public/style.css');
    test.equal(actual, expected, 'should include css file.');
    test.done();
  }
};
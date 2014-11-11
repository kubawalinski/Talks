// code adapted from http://dailyjs.com/2012/09/14/functional-programming/

require("./helpers/curry.js");
require("./helpers/compose.js");
require("./helpers/flip.js");

//more helpers
var negate = function(x) { return -1 * x; };
var abs = function(x) { return Math.abs(x); };
var map = function(a, f) { return a.map(f); };

//our test data
var numbers = [-1, 2, 0, -2, 3, 4, -6];

//Task: make sure all elements in array [numbers] are negated

var negateAll = function(array) {
    return map(array, function (x) {
        return negate(abs(x))
    });
};
console.log(negateAll(numbers));

var negateAllFunc = map.flip().curry(negate.compose(abs));
console.log(negateAllFunc(numbers));

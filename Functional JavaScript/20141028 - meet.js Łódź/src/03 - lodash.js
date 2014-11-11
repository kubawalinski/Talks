var _ = require("lodash");

var negate = function(x) { return -1 * x; };
var abs = function(x) { return Math.abs(x); };

//our test data
var numbers = [-1, 2, 0, -2, 3, 4, -6];

var negateAll = function(array){
    return _.map(array, function (x) {
        return negate(abs(x))
    });
};
console.log(negateAll(numbers));

//we've got _.curry!

//we've got _.compose!

//we don't have _.flip :(
//but we have _.partialRight :)


var negateAllLd = _.partialRight(_.map, _.compose(negate, abs));
console.log(negateAllLd(numbers));

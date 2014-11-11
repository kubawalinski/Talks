var fjs = require("functional.js");

var negate = function(x) { return -1 * x; };
var abs = function(y) { return Math.abs(y); };

//our test data
var numbers = [-1, 2, 0, -2, 3, 4, -6];
console.log(numbers);

var negateAll = function(array){
    return fjs.map(function (x) {return negate(abs(x))}, array);
};
console.log(negateAll(numbers));

//we've got fjs.curry!
var add = function(x,y){return x+y;};
var curriedAdd = fjs.curry(add);
var addTo2 = curriedAdd(2);
console.log(addTo2);
console.log(addTo2(5));

//better yet, map is curried by default!


//we've got fjs.compose!
var alwaysNegative = fjs.compose(negate, abs);
console.log(alwaysNegative(1));
console.log(alwaysNegative(-1));

//and we don't need _.flip :)

var negateAllFjs = fjs.map(fjs.compose(negate, abs));
console.log(negateAllFjs(numbers));

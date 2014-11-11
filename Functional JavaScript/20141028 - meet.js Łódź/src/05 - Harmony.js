//Most (if not all) of this code won't work out of the box. You need to run it in an ES6 friendly environment. I am going to use the ES6 REPL extension for chrome.

//arrow functions
console.log([1,2,3,4].map(x=>x*2));

var square = x=>x*x;
console.log(square);
console.log(square(4));

//destructuring arrays and objects
var [a, , b] = [1,2,3];
console.log(a,b);

var {x, y, z, missing} = {w: 0, x: 1, y: 2, z:3};
console.log(x,y,z,missing);

//spread operator
var add = function(x,y,z){
    return x+y+z;
};
console.log(add(...[1,2,3]));


//rest parameters
var stuffToLog = ["INFO", "Booting up", "Ready", "Invalid login attempt", "Shutting down"];

console.log("ES5 Way:\n");
function logWithTag5(tag) {
    var logs = [].slice.call(arguments, 1);
    logs.forEach(function (log) {
        console.log(tag + ': ' + log);
    });
}
logWithTag5(...stuffToLog);

console.log("\n\nES6 Way:\n");
function logWithTag6(tag, ...logs) {
    logs.forEach(function (log) {
        console.log(tag + ': ' + log);
    });
}
logWithTag6(...stuffToLog);

console.log("\n\nES6 Short Way:\n");
var logWithTag6Short = (tag, ...logs) => logs.forEach((log) => console.log(tag + ': ' + log));
logWithTag6Short(...stuffToLog);

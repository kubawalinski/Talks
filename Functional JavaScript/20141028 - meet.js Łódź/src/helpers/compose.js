Function.prototype.compose = function(g) {
    var f = this;
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return f.call(this, g.apply(this, args));
    };
};

var greet = function(s) { return 'hi, ' + s; };
var exclaim = function(s) { return s + '!'; };
var excited_greeting = greet.compose(exclaim);
console.log(excited_greeting('meet.js'));

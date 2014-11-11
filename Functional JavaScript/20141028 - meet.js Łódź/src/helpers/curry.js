Function.prototype.curry = function() {
    var args = Array.prototype.slice.call(arguments);
    var f = this;
    return function() {
        var inner_args = Array.prototype.slice.call(arguments);
        return f.apply(this, args.concat(inner_args))
    };
};

var add = function(x, y) { return x + y; };
var addTo3 = add.curry(3);
console.log(addTo3(4));
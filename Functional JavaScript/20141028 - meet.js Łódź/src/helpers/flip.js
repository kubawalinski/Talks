Function.prototype.flip = function() {
    var f = this;
    return function() {
        var args = Array.prototype.slice.call(arguments);
        return f.apply(this, args.reverse());
    };
};

var div = function(x, y) { return x / y; };
console.log(div(1, 2));
console.log(div.flip()(1,2));

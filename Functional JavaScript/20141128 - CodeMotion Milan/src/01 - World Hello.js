//note: first class function properties demonstrated here
var concat = function(a, b){
    //return a + ' ' + b;
    return [a,b].join(' ');
};
var flip = function(f,a,b){
    return f(b,a);
};
console.log(flip(concat, "Milan", "Ciao"));

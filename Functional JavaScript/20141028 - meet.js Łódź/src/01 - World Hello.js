//note: first class function properties demonstrated here

var concat = function(a, b){
    //return a + ' ' + b;
    return [a,b].join(' ');
};

var invertParams = function(f,a,b){
    return f(b,a);
};

console.log(invertParams(concat, "World", "Hello"));

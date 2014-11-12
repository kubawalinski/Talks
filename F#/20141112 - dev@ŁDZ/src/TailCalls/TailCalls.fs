let rec factorial x =
    if x <= 1 then
        1
    else
        x * factorial (x - 1)

let fact10 = factorial 10



//optimized function - use a recursive call as the return value from a function
let accFactorial x =
    let rec accTailRecursiveFactorial x acc =
        if x <= 1 then
            acc
        else
            accTailRecursiveFactorial (x - 1) (acc * x)
 
    accTailRecursiveFactorial x 1


let accFact10 = accFactorial 10



(*
http://blogs.msdn.com/b/chrsmith/archive/2008/08/07/understanding-tail-recursion.aspx

Resulting IL converted to C#:

while (true)
{
    int num = x;
    if (num <= 1)
    {
        return acc;
    }
    acc *= x;
    x--;
}

*) 



let rec sum list =
    match list with
    | [] -> 0
    | x :: xs -> x + sum xs
    


let sumTail list =
    let rec sumTailAcc list acc =
        match list with
        | [] -> acc
        | x :: xs -> sumTailAcc xs (acc + x)
    sumTailAcc list 0
    
printfn "%A" (sum [1..4])
printfn "%A" (sumTail [1..4]) 



//bonus - more functional apporach to tail call optimization
let contFactorial x =
    let rec contTailRecursiveFactorial x f =
        if x <= 1 then
            f()
        else
            contTailRecursiveFactorial (x - 1) (fun () -> x * f())
 
    contTailRecursiveFactorial x (fun () -> 1)

printfn "%A" (contFactorial 10)
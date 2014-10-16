(*
 1. Basic Values and Functions
*)

//type inference
let anInt = 10
let aFloat = 20.0
let aDecimal = 33m
let aString = "I'm a string!"



//printing to stdout
printfn "The answer is %d" 42
printfn "A imię jego będzie... %s" "czterdzieści i cztery"
printfn "%A" "I don't care about the type, I just want to print it..."



//problems with type inference
let toHackerTalk phrase = phrase.Replace('t', '7').Replace('o', '0').Replace('e', '3')
printfn "%A" (toHackerTalk "Check this out!") 



//a couple of ways to define a function
let add x y = x + y

let add' x y = 
    let result = x+y
    result
    
let add5and3 = add 5 3
let add5and3' = add' 5 3



//we sometimes have to use parentheses
let addSquare3To4 = add (square (3), 4)





(*
2. Data Types
*)

//Tuples
let t1 = 12,5,7
let v1,v2,_ = t1 

let t2 = "hi", true
printfn "%A" (fst t2)
printfn "%A" (snd t2)



//Let's extract the third value
let trd t =
    let _,_,x = t
    x
    
let third = trd t1
       
let trd' (_,_,r) = r

let third' = trd' t1 



//returning tuplese from functions
let returnSelfAndSquare x = x, x*x

let FiveandSquare = returnSelfAndSquare 5



//Lists
let evens = [2; 4; 6; 8]
let firstTen = [1..10]



//List operations
let doubled = List.map (fun x -> x * 2) evens

let addItem list x = x :: list

let newList = addItem evens 0

printfn "%A" newList.Head
printfn "%A" newList.Tail
printfn "%A" newList.Tail.Tail.Head

let sum = List.reduce (fun x y -> x+y) [1..4]



//Records
type Book = 
  { Name: string;
    AuthorName: string;
    Rating: int option;
    ISBN: string }
    
let Metro2033 = 
  { Name = "Metro 2033";
    AuthorName = "Dmitry Glukhovsky";
    Rating = Some 5;
    ISBN = "1481845705" }



//playing with the record type and options
let Metro2034 = { Metro2033 with Name = "Metro 2034" ; Rating = None}
  
let printRating book =
    match book.Rating with
    | Some rating -> printfn "I give this book %d out of 5!" rating
    | None -> printfn "I didn't review this book"

//test the rating printer
printRating Metro2033
printRating Metro2034



//Useful application of tuples and options
let handleTry tryResult =
    match tryResult with
    | true, value -> Some value
    | _ -> None

match (System.Int32.TryParse "1a23" |> handleTry) with
| Some value -> printfn "It's a number with value %d." value
| None -> printfn "It's not a number."



//Discriminated Unions
type MushroomColor =
| Red
| Green
| Purple

type PowerUp =
| FireFlower
| Mushroom of MushroomColor
| Star of int

//unions and pattern matching
let handlePowerUp powerUp =
    match powerUp with
    | FireFlower -> printfn "Ouch, that's hot!"
    | Mushroom color -> match color with
                        | Red -> printfn "Getting bigger!"
                        | Green -> printfn "1UP!!!"
                        | Purple -> printfn "1DOWN :("
    | Star duration -> printfn "You're invincible for %d seconds!" duration

//let's test it
handlePowerUp (FireFlower)
handlePowerUp (Mushroom Green)
handlePowerUp (Mushroom Purple)
handlePowerUp (Star 10)





(*
3. Fun with Functions
*)

//let's double and sum all even numbers from 1 to 10
let list = [1..10]
let sum x = List.sum (List.map (fun x -> x * 2) (List.filter (fun x -> x % 2 = 0) x))
    
let sum' x = 
    x
    |> List.filter (fun x -> x % 2 = 0)
    |> List.map (fun x -> x * 2)
    |> List.sum

let sum1To10 = sum list
let sum1To10' = sum' list



//currying
let add x y = x + y

let inc = add 1

let incremented7 = inc 7



//currying - order of arguments matters a lot
let sub x y = x - y

let dec = sub 1

let decremented10 = dec 10





(*
4. Recursion
*)

//Naive recursion
let factorial x =
    if x <= 1 then
        1
    else
        x * factorial (x - 1)
    
let sumList list = 
    match list with
    | [] -> 0
    | x :: xs -> x + sumList xs
    


//let's test our recursive functions
printfn "%A" (factorial 4)
printfn "%A" (sumList [1;2;3;4])



//Let's force a stack overflow exception
let rec infinteLoop() = 1 + infinteLoop() 
infinteLoop()



//Let's look at the stack during execution of our naive recursive function
//goto: Tail Calls project
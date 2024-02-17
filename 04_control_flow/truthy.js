const userEmail="anujshrivasta982"

if(userEmail){
    console.log("Got user email");
}
else{console.log("Dont have user email");}


// falsy valuse

// false, 0, -0, BigInt 0n, "", null, undefined, NaN


// truthy valuse

// true, "0", 'false', " ", [], {}, function(){}



// Nullish Coalescing Operator(??): null undefined


let val1;
val1=55??10

console.log(val1);
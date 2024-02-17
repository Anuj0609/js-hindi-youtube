
function sayMyName()
{
    console.log("S");
    console.log("H");
    console.log("R");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("A");
    console.log("V");
    console.log("A");
    
}

// sayMyName()

function addTwoNumbers(number1, number2){
// let result=number1+number2

// return result
return number1+number2}

const result=addTwoNumbers(3,5)

// console.log("Result:" ,result);

function loginUserMessage(username)
{

    if(username===undefined){
        console.log("Please enter a username");
        return

    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());

function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(200,400,500));

const user={
    username:"ANUJ",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

handleObject ({
    username:"anuj",
    price:399
})


const myNewArray=[200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));
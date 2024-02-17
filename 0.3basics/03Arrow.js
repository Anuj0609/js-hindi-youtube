const user={
    username:"ANUJ",
    price:999,

    welcomeMessage:function(){

        console.log(`${this.username}, welcome to website`);
        // console.log(this);

    }


}

// user.welcomeMessage()
// user.username="ZAYN"
// user.welcomeMessage()

// console.log(this);

// function chai(){

//     let username="ANUJ"
//     // console.log(this.username);
// }
// chai()

// const chai=function(){
//     let username="Anuj"
//     console.log(this.username);
// }

const chai=()=>{
    let username="Anuj"
    console.log(this);
}

// chai()

// const addTwo=(num1, num2)=>{
//     return num1+num2
// }

// const addTwo=(num1, num2)=>  num1+num2
// const addTwo=(num1, num2)=>  (num1+num2)

const addTwo=(num1, num2)=>  ({username:"ANUJ"})

console.log(addTwo(3,4));

// const myArray=[2,3,4,5,6]

// myArray.forEach()
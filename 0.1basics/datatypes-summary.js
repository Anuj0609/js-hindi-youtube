// // # Primitive

// //7 types:String, Number, Boolean, null, undefined, Symbol, BigInt

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
// const outsidetemp=null
// let userEmail;

// const id=Symbol('123')
// const anotherId= Symbol('123')

// console.log(id===anotherId);


// const bigNumber= 75341658713646843865843015n

// // Reference type (Non primitive)

// //Arrey, Objects, Functions

// const heroes = ["saktiman", "naagraaj", "doga"]

// let myObj=
// {
//     name:"Anuj",
//     age:22,
// }

// const myFunction = fundtion(){
//     console.log("Hello World");
// }

// console.log(typeOf bigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap (Non Primitive)

let myYoutubename= "hiteshchoudharydotcom"

let anothername= myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userone={

    email:"anujshrivastava982@gmail.com",
    upi: "user@ybl"
}

let userTwo= userone

userTwo.email= "zaynMyst@gmail.com"

console.log(userone.email);
console.log(userTwo.email);
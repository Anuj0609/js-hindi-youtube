// singleton
// Object.create

//object literals

const mySym= Symbol("key1")

const JsUser={

    name:"Anuj",

    "full name": "ANUJ Shrivastava",
    [mySym]:"mykey1",
    age:27,
    location: "Gurgaon",
    email: "anujshrivastava982@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="zaynmyst@gmail.com"
// Object.freeze(JsUser)
JsUser.email="zaynmyst@outlook.com"
// console.log(JsUser);


JsUser.greeting= function(){
    console.log("Hello JS user")
}


JsUser.greetingtwo= function(){
    console.log(`Hello JS user, ${this.name}`)
}


console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());



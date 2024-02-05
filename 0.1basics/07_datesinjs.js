//Dates

let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate);

// let myCretedDate= new Date(2023, 0, 23)

// let myCretedDate= new Date(2023, 0, 23, 5,3)

// let myCretedDate= new Date("2023-00-14")

// let myCretedDate= new Date("2023-01-14")

let myCretedDate= new Date("01-14-2023")
// console.log(myCretedDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCretedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
// console.log(newDate);
// console.log(newDate.getDate());

`${newDate.getDay()} and the time`

newDate.ToLocaleString('default',
{
    weekday:"long"
})
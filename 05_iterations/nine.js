const myNums=[1,2,3]
// const myTotal=
// myNums.reduce(function (acc, curval){
//     return acc+curval
// },0)

const myTotal=myNums.reduce((acc, curval)=>acc+curval,0)

console.log(myTotal);

const shoppingCart=[
{
    itemname:"js course",
    price:2999
},
{
    itemname:"Python",
    price:4000
},
{
    itemname:"c++",
    price:2000
}
]

const totalCost=shoppingCart.reduce((acc, item)=>acc+item.price,0)

console.log(totalCost);
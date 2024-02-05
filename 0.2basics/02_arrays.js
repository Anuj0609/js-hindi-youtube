const marvel_heroes=["thor", "Ironman", "Spiderman"]
const dc_heroes=["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allheroes= marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const all_newheroes= [...marvel_heroes,...dc_heroes]
// console.log(all_newheroes);


const another_array=[1,2,3,[4,5,6], 7, [6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)
console.log(real_another_array);




console.log(Array.isArray("Anuj"))
console.log(Array.from("Anuj"))
console.log(Array.from({name:"Anuj"}))// intresting

let score=100
let score2=200
let score3=300

console.log(Array.of(score,score2,score3))
// //arrays

// const myarr = [0, 1, 2, 3, 4, 5]
// console.log(myarr[0]);

// const myheros = ["spiderman", "hulk", "Ironman"]
// const arr2 = new Array(1, 2, 3, 4, 5, 6, 7)
// console.log(myheros[2])

// //array methods 
// myarr.push(9)
// console.log(myarr);
// //myarr.pop()  // to remove element from back

// myarr.unshift(9);
// console.log(myarr); // adds elements in array at start

// myarr.shift();
// console.log(myarr); // removes first element from arra


// console.log(myarr.includes(8));

// const newArr = myarr.join();
// console.log(newArr); // converts array into string 

// const mynewarray = myarr.slice(1, 3);
// console.log(mynewarray);

// const mynewarray2 = myarr.splice(1, 2);
// console.log(mynewarray2);
// console.log(myarr);


const hero = ["Ironman", "thor"];
const dc = ["superman", "flash"]

// hero.push(dc)

// console.log(hero)
// console.log(hero[2][0]);

// let allhero = hero.concat(dc)
// console.log(allhero);

const all_new_hero = [...hero, ...dc]
console.log(all_new_hero);

console.log(all_new_hero[3]);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, 8, 1]]
console.log(another_array.flat(Infinity));

console.log(Array.isArray("Soham")) //check if it is array
console.log(Array.from("Soham")); // convert to array

let score1 = [100, 400, 500]
let score2 = 200
let score3 = [300, 900, 1000]

console.log(Array.of(score1, score2, score3)) //[ [ 100, 400, 500 ], 200, [ 300, 900, 1000 ] ]



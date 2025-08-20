let score = 33
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33"=> 33
//"33abc"=> NaN but type is number 
// true => 1 ; false =>0 

let isLoggedIn = 0
let boolisloggedin = Boolean(isLoggedIn);
console.log(boolisloggedin);


// when converting boolean 1=> true and 0 =>false
// ""=>false 
// "hitesh"=>true

let age = 22
let convertedage = String(age)
console.log(convertedage);
console.log(typeof convertedage);

// *************************operations******************


let value = 3
let negvalue = -value
console.log(negvalue);

let str1 = "hello"
let str2 = " soham"
let str3 = str1 + str2;
console.log(str3);

console.log(+true);// op 1
console.log(+"");// op 0



console.log(echo("left", 4) / echo("middle", 3) ** echo("right", 2));
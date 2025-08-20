//types of datatypes 
//-primitive (call by value)       -Non-primitive(Reference type )

//String                            Arrays
//number                            objects
//boolean                           functions
//null
//undefined
//symbol
//bigint

//is javasacript static or dynamically typed language
//  dynamically typed language 


const id = Symbol('123')
const anoherid = Symbol('123')
console.log(id === anoherid); // false 

const bignumber = 2345678654324567876n


const hero=['shaktiman','spiderman']
console.log(hero)

let myobj={
    name:"soham",
    age:22,
}
console.log(myobj.name )

const myfunction=function(){
    console.log("i");
}

console.log(typeof bignumber) //bigint
console.log(typeof null);//object
console.log(typeof undefined);//undefined
console.log(typeof hero);//object


// *****************memory******************

// stack(primitive type of datatype are stored in stack) heap (Non-primitive datatype are stored in heap memory)

// in stack a copy is given of value while in heap reference is given instead of copy so when you change in heap it will change the original value

let myyt="toons"
let anothername=myyt

console.log(myyt + " " +anothername);



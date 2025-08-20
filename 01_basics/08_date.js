let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString());


typeof myDate // object

// let myCreatedDate=new Date(2023,0,23);
// let myCreatedDate=new Date(2023,0,23,5,3)
// let myCreatedDate=new Date("2023-01-14")
let myCreatedDate = new Date("01-14-23")
console.log(myCreatedDate.toLocaleString());

let timeStamp = Date.now();
console.log(Math.floor(Date.now() / 1000));

let newdate = new Date();
console.log(mewdate);
console.log(newdate.getMonth() + 1);











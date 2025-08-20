const tinderUser = new Object() //singleton object
// const tinderUser={}
tinderUser.id = "001";
tinderUser.name = "Soham";
tinderUser.isloggedIn = true;

// console.log(tinderUser)

const regulardata = {
    email: "ksoh0907@gmail.com",
    fullname: {
        userfullname: {
            firstname: "soham",
            lastname: "kale"
        }
    }
}

console.log(regulardata.fullname.userfullname);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }
const obj3 = { 5: "e", 6: "f" }

// const obj4 = { obj1, obj2, obj3 }
//const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = { ...obj1, ...obj2, ...obj3 }

console.log(obj4);


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

const { courseInstructor } = course // object destructuring
console.log(courseInstructor);


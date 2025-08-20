// singleton  if obj is made by  constructor way it is called singleton

//obj literal

const mysym = Symbol("key1")
const JsUser = {
    name: "soham",
    age: 22,
    [mysym]: "key1",
    email: "ksoh0907@gmail.com",
    location: "pune",
    isLoggedIn: false
}

console.log(JsUser.name);
console.log((JsUser["age"]));

//JsUser.email="koh09077@gmail.com"
//Object.freeze();// we cannot update the object if we use this it will not show any error 


JsUser.greeting = function () {
    console.log("Hello JS User");
}
JsUser.greeting2 = function () {
    console.log(`hello ${JsUser["name"]}`);
    console.log(`age ${this.age}`);


}

console.log(JsUser.greeting2());



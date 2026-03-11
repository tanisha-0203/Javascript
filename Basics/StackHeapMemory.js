let youtube="chaiaurcode"
let anotheryt=youtube
anotheryt="html"
console.log(youtube)
console.log(anotheryt)
// this the above case no matter what whenever we assign value like anotheryt=youtube a copy of variable youtube is passed ot the anotheryt hence change made to any of the object remain to themselves only

let obj1={
    name:"tanisha",
    upi:"obj1@ok"
}
let obj2=obj1
obj2.upi="obj2@ok"     // this changes both upi in obj1 as well as obj2 because in non primtive data types it is stored in heap memory as when a new object is made no doubt it is placed in stack ememory first but the refernce of same obj1 is passed to obj2 that is why when changes made to either of the objects will reflect in both of them

console.log(obj1.upi)
console.log(obj2.upi)

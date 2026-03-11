// let score="33";
// why we need tocheck the dqata type of any variable we use or something passed to us?
//because whenver something from frontend is oassed to backend we dont knw in which form the frontend person might have stored that value maybe 33 is stored as string in some form or anything
// console.log(typeof score);
// let valueInNumber = Number(score);   //type conversion

let score=true
// console.log(typeof score);

let change = Number(score);
// console.log(change); // 
// when we try to print it after conversion we see a NaN because NaN is a datatype whose type is number 

// console.log(typeof(change));   // this gave us number even though 33abc is not or shouldnt be converted to number so this is a mistake 

// in case of score=null we get after conversion value of change as 0 but type of change is still number
// also for examples like undefined we get NaN
//for boolean value like true we get 1 and similarly for false 0 


let logIn="";
let booleanlogIn=Boolean(logIn);
console.log(booleanlogIn);





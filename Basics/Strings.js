let name="tanisha"
let repoCount=25
console.log(name+ repoCount)   // normal way of concating string or writing strings

//string interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String("hitechch")
console.log(gameName.length)
console.log(gameName.__proto__);

console.log(gameName.toUpperCase())   // this doesnt change the original string due to same stack memory concept
console.log(gameName)

console.log(gameName.charAt(2)) // to check at a particular index which elment is present
console.log(gameName.indexOf('t')) // to which the particular elemnt is at which index




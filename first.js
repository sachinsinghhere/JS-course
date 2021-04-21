

//Loops

var count = 0;
var iterator;
for (iterator = 1; iterator < 10; iterator = iterator * 2) {
  console.log(iterator);
  count++;
}
console.log("count is : " + count);

// foreach
let games = ["pubg", "cod", "minecraft", "amongus"];

games.forEach((games) => console.log(games));

// for of

for (item of games) {
  console.table(item);
}

//For in

for (item in games) {
  console.log(item); //this gives indexes
  console.log(games[item]); //this gives values at present indexes
}

//Exponent operator (Arithmathic opeerator)

let x = 5,
  y = 2;
console.log("exponent of (x,y) / x power y :" + x ** y);

//shift operators (Left, Right)
console.clear(); //clears console

console.log("x<<y: " + (x << y)); // this does left shift on bit of 5 by 2 bit.
//1001
console.log("x>>y : " + (x >> y)); //this does right shift on bit of 5 by 2 bit.

//Relational Operators
NaN === NaN; // false // NaN=> not a number
NaN == NaN; // false

/*
 Note:
+0 ==-0 // true
+0 ===-0
*/

/*
function showPerSecond(begin, end) {
  var count = 1;
  count = count + 1;
  if (begin === end) {
    console.log(begin);
    return;
  }
  if (begin > end) {
    console.log(begin);
    begin = begin - 1;
    setTimeout(() => {
      showPerSecond(begin, end);
    }, 1000);
    return count;
  } else {
    console.log(begin);
    begin = begin + 1;
    setTimeout(() => {
      showPerSecond(begin, end);
    }, 1000);
    return count;
  }
}
showPerSecond(8, 15);

*/

function isPallindrome(str) {
  let cactchedString = str;
  console.log(cactchedString);
  if (cactchedString == cactchedString.split("").reverse().join("")) {
    console.log("string is pallindrome");
  } else console.log("string is not pallindrlome");
}

isPallindrome("0 1 1 1 0 1 ");

// Type coercion means it  one type is converted into another
// one at the time of comparision.

//like == allows type coercion
//and === dosent allows type coercion

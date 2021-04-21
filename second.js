// Example of hoisting..

var favFood = function () {
  console.log("orignal Choice " + greatfood);
  var greatfood = "samosa";
  console.log("new choice " + greatfood);
};

favFood();
console.clear();
// to stop hoisting let and const came into existance.. bcz in other
// pro. languages it might throw an error..

//hoisting example ends here

//Primitive datatypes
/**
 * number
 * string
 * boolean
 * null
 * undefined
 * symbol
 */

//Non-Primitive datatypes
/**
 * Object
 */

/*
# Object #

object creation (two ways)
    
1) object litteral
2) New keyword

*/
//way   1
var objs = {
  name: "sachin",
  degree: "engineering",
  no: 999977658,
  showData() {
    console.log("has done " + this.degree);
  },
};
console.log(objs.name);
objs.showData();

//way  2
let player = new Object();
player.name = "sachin";
player["height"] = 162;
player.showMessage = function () {
  console.log(this.name + " is " + this.height + " cm long ");
};
player.showMessage();

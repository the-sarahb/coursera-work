
var x = 'Hello World';
console.log ("message global is: " + x);

var a;
console.log (a);

if (a == undefined) {
	console.log ("a is undefined");
}

a= 5;

if (a == undefined) {
	console.log ("a is undefined");
}
else {console.log ("a is now defined");}

function test1 () {
	var a;
	console.log (a/5);
}

test1();

var c = 4, d =4;
if (c==d){console.log("c = d");}

// ---------

// ***** If statement (all false)
if ( false || null || 
     undefined || "" || 0 || NaN) {
  console.log("This line won't ever execute");
}
else {
  console.log ("All false");
}

// ***** If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
  console.log("All true");
}

function test2 () {
	return {
		name: "Sarah"
	}
};

console.log(test2());

// For loop
var sum = 0;
for (var i = 0; i < 10; i++) {
  console.log(i);
  sum = sum + i;
}
console.log("sum of 0 through 9 is: " + sum);



// Default values
function orderChickenWith(sideDish) {
  sideDish = sideDish || "whatever!";
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();


// Default values
function orderChickenWith(sideDish) {
  if (sideDish === undefined) {
  	sideDish = "whatever"
  };
  console.log("Chicken with " + sideDish);
}

orderChickenWith("noodles");
orderChickenWith();

//---------
var x = 10;
if ( (null) || (console.log("Hello 1")) || x > 5 ) {
  console.log("Hello 2");
}

var x = 10;
if ( (null) || "Hello  3" ) {
  console.log("Hello 4");
}

var x = 10;
if ( (null) || (console.log("Hello 5"))) {
  console.log("Hello 6");
}

//------------------objects
// Object creation
var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";

console.log(company);
console.log("Company CEO name is: " 
  + company.ceo.firstName);

console.log(company["name"]);

var stockPropName = "stock of company";
company[stockPropName] = 110;

console.log("Stock price is: " + 
  company["stock of company"]);   //or company[stockPropName]


// Better way: object literal
var facebook = {
  name: "Facebook",
  ceo: {
    firstName: "Mark",
    favColor: "blue"
  },
  "stock of company": 110
};

console.log(facebook.ceo.firstName);

//functions are objects
console.log(orderChickenWith);
orderChickenWith = {
	name: "noodles"
};

orderChickenWith.side = "potatoes"
console.log(orderChickenWith);

//functions
function test3 (abc) {
	return abc*2
};
console.log(test3(3));

var xyz = function test4(xxy) {
	return xxy*2
};
console.log(xyz(4))

function makeMultiplier(multiplier) {
  var myFunc = function (x) {
    return multiplier * x;
  };
  return myFunc;   //key to using functions withing functions
}

//or 
//function makeMultiplier(multiplier) {
//   function myFunc(x) {
//     return multiplier * x;
//   };
//   return myFunc;
// }


var multiplyBy3 = makeMultiplier(3);  //multiplyBy3 is equal to return multiplier '3' times x
console.log(multiplyBy3); //multiplyBy3 is equal to return multiplier '3' times x
console.log(makeMultiplier(3));
console.log(multiplyBy3(10)); //since multiplyBy3 = function (x) --> then multiplyBy3(10) = function(10)

// Passing functions as arguments
function doOperationOn(x, operation) {
  return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);

// Pass by reference vs by value
function changePrimitive(primValue) {
  console.log("in changePrimitive...");
  console.log("before:");
  console.log(primValue);
  
  primValue = 5;
  console.log("after:");
  console.log(primValue);
}

var value = 7;
changePrimitive(value); // primValue = value
console.log("after changePrimitive, orig value:");
console.log(value);


//pass by reference
function changeObject(objValue) {
  console.log("in changeObject...");
  console.log("before:");
  console.log(objValue);
  
  objValue.x = 5;
  console.log("after:");
  console.log(objValue);
}

value = { x: 7 };
changeObject(value); // objValue = value
console.log("after changeObject, orig value:");
console.log(value);
console.log(value.x);

// Function constructors
function Circle (radius) {
  this.radius = radius;  
  //this.getArea = function () {
    //return Math.PI * Math.pow(this.radius, 2);
    //};
}

console.log("This This is 1"+" "+ this)
console.log(this)
console.log(this.radius)

Circle.prototype.getArea = //getArea is a property of the object Circle
  function () {
    return Math.PI * Math.pow(this.radius, 2);
  };


var myCircle = new Circle(10); //defines myCircle as an object //object circle with property radius with value radius
console.log(myCircle.getArea());

var myOtherCircle = new Circle(20);
console.log(myOtherCircle);
console.log(myOtherCircle.radius);

// Object literals and "this"  --this will point to the object rather than the window with object literal
var literalCircle = { //new object - defines object as above
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(this);

    var increaseRadius = function () {
      self.radius = 20; //self is used to make sure to look at the function and not the outer window values
    };
    increaseRadius();
    console.log("This This is 2"+" "+ this)
	console.log(this)
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());

//name spacing 
(function (window) {
  var yaakovGreeter = {};
  yaakovGreeter.name = "Yaakov";
  var greeting = "Hello ";
  yaakovGreeter.sayHello = function () {
    console.log(greeting + yaakovGreeter.name);
  }

  window.yaakovGreeter = yaakovGreeter;

})(window);

// Immediately Invoked Function Expression
// IIFE
(function (name) {
  console.log("Hello " + name);
})("Coursera!");
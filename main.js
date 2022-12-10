"use strict";
exports.__esModule = true;
var message = "hello wold";
console.log(message);
// let can be done without declaration 
// const has to be declare with value and can never be reassigned
// Variable Types
var isBeginner = true;
var total = 0;
var name = 'Vishwas';
//Template String
var sentence = "My name is ".concat(name, "\nI am a beginner in Typescript\n");
console.log(sentence);
//static type checking
// name = true;
//null and undefined
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//Array declaration
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Chris', 22];
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 5] = "Red";
    Color[Color["Green"] = 6] = "Green";
    Color[Color["Blue"] = 7] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);

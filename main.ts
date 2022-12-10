export {}
let message = "hello wold";
console.log(message);

// let can be done without declaration 
// const has to be declare with value and can never be reassigned

// Variable Types

let isBeginner : boolean = true;
let total: number =0;
let name: string = 'Vishwas';

//Template String

let sentence: string = `My name is ${name}
I am a beginner in Typescript
`;

console.log(sentence);

//static type checking
// name = true;

//null and undefined
let n: null = null;
let u: undefined = undefined;

// let isNew: boolean = null;
// let myName: string = undefined;


//Array declaration

let list1: number[] = [1,2,3];
let list2: Array<number> = [1,2,3];

let person1: [string, number] = ['Chris', 22];


//enum
enum Color{
    Red =5, Green, Blue
};

let c:Color = Color.Green;
console.log(c);

//any type
let randomValue: any = 10;
randomValue = true;
randomValue = "Dante";

let myVariable: any = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj &&
    typeof obj === "object" &&
    "name" in obj
}
if (hasName(myVariable)){
    console.log(myVariable.name);
}


console.log(myVariable.name);
myVariable();
myVariable.toUpperCase();

//unkown type
//we use type assertion which is typecasting in other language

//Ex--
let myVar: unknown = 10;
(myVar as string).toUpperCase();

//Type inferance
let a;
a=10;
a = true;

//Error(Type inferance)
// let b = 20;
// b=true;

//Union Type
let multitype: number | boolean;
multitype = 20;
multitype = true;

//restrict to a type while any type has no restirction 

//Function in typeScript
function add(num1:number, num2:number=10): number{
    if(num2)
        return num1+num2;
    else
        return num1;
}
add(5,10);
// add(5,'10'); it throws error in this as string value

//optional parameter and default parameter
add(5);
//optional parameter has to be always after required parameters



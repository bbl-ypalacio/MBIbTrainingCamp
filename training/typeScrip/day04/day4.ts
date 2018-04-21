//notes: https://www.typescriptlang.org/docs/handbook/interfaces.html

let mickey: boolean;
let plutoNum    : number;
let plutost     : string;
let hex         : number = 0xf00d;
let total       : number = 158.33;

//transpile transparently 
//TypeScript has all funtionallity of javascript avaliable today, no conversion needed.  
let value = 100;
console.log(`the size is ${value}`);

//creating arrays 
//2 way to define array 
let myArrayJS[] = [1, 2, 3];//javascrip mode 
let myArrayTS: Array<number> = [1, 2, 3]//TS mode 
let mysecondArray: Array<string> = ['hello', 'world'];
console.log(mysecondArray[0]);

//dataType called "Tuple"
let x_0: [string, number];
x_0 = ['hello', 38];

enum Color { Red, Blue, Yellow };
let x_1 : Color;
if (x_1.Red) {
    enum Color { Red = 1, Green = 2, Blue = 4 }
    let c: Color = Color.Green;

    c = 2
    alert(c); //Green will be displayed 

    let anyValue: any;

    anyValue = 'hello world';
    anyValue = 89.90;
}

function helloWorld(): void {
    console.log("hello world");
}

function error(message: string): never {
    throw new Error(message);
}

function pluto(message: string): never {
    throw new Error(message);
}

const sing = function () {
    while (true) {
        console.log("1 Nerver give up");
        console.log("2 Nerver give up");
        console.log("3 Nerver give up");
    }
}

//declearing variables in TC
/*3 ways:
    -LET = only in local scope
    -VAR = anything in the childe scope can access 
    -CONST =
*/

function syaHello(): void {
    let name    : string = "world";
    const salute: string = "world_1";

    console.log("Hello " + name);    
    console.log("Hello " + salute);
};

//closeure- able to acces the fiel of funtion withing a funtion stred on the stack
function f() {
    var a: number = 10;
    return function g() {
        var b: number;
        b = a + 1;
        return b;
    }
}

var mickey_1 = f();
mickey_1.g(); //UD
 /*
retun 11 and still we can access the value of a, even after the funtion f 
*/
var g = f();
g(); //return 11


function f_1(a: boolean): number{
    if (a) {
        var x = 100;
    }
    return x;
}

f_1(true); //return 10
f_1(false);//return UD






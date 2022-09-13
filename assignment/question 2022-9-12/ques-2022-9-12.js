console.log("----------------1. Math.integer(x)-------------");

function nanOrNumber (n){
    console.log( n)
    if (isNaN(n)) return `Enter valid number`;
    console.log( n)

}
let typeHere = prompt (`Enter valid number`);
console.log(nanOrNumber (typeHere))

// console.log(Number.isInteger(2));
// console.log("Math.integer--->", Number.isInteger(4));

console.log("----------------2. greater less equal-------------");

function abc  (a, b){
if (a > b) 
    {return "biggest number";}
else if (b > a) 
    {return "medium number";}
else (a == b)
     {return "both are equal";}
}
let a = 9;
let b = 9;
console.log(abc(a, b))
// function paraMeter (greater, less, equal){
//   if (a > b) return `a greater than b`

// console.log(paraMeter (gre, les, equ))

console.log("----------------3. triangle-------------");

function checkTriangle(intX, intY , intZ )
{
if (x == y && y == z)
       { return "Equilateral Triangle";}
else if (x == y || y == z || z == x)
       { return "Isosceles Triangle";}
else
       { return "Scalene Triangle";}
}
let x = 9;
let y = 9;
let z = 5;
console.log(checkTriangle(x, y , z ))
     
console.log("--- 4. the number existed in between two number.---");

const A = 2;
const B = 20;
function exist (num, startNum, endNum){
   
if (A == 2 &&  B == 20){
    return "this number is exist here"; }

else if (C >= 2 || C == 20)
 {return"this number is exist here";}
else
{return "this number is not exist here";}
}
let C = prompt(`Enter any number`)
console.log( exist (C))


console.log("---------- 5. evaluateNumbers------------");
let number1 = 5;
let number2 = 9;
function evaluateNumbers (number1, number2, operation){
    if (operation == "add"){
        return `this is addition ${operation}`;
    }

    if (operation == "subtract"){
        return `this is subtract ${operation}`;
    }

    if (operation == "multiply"){
        return `this is multiply ${operation}`;
    }

    if (operation == "division"){
        return `this is division ${perimeter.toFixed(2)}`;
    }

    if (operation == "modulus"){
        return `this is modulus ${operation}`;
    }
}

const valueAdd = number1 + number2 ;
console.log(valueAdd)

const valueSubtract = number1 - number2 ;
console.log(valueSubtract)

const valueMultiply = number1 * number2 ;
console.log(valueMultiply)

const valueDivision = (number1 / number2).toFixed(2);
console.log(valueDivision)

const valueModulus = number1 % number2 ;
console.log(valueModulus)


console.log("---------- 6. square and square-root------------");
console.log("Math.sqrt--", Math.sqrt(144));
console.log("Math.sqrt--", Math.sqrt(64));
console.log("Math.sqrt--", Math.sqrt(625));

console.log("Math.sqrtRoot--", Math.pow(12, 2));
console.log("Math.sqrtRoot--", Math.pow(8, 2));
console.log("Math.sqrtRoot--", Math.pow(25, 2));


console.log("---------- 7. power------------");

console.log("Math.pow--", Math.pow(4, 7));
console.log("Math.pow--", Math.pow(10, 4));
console.log("Math.pow--", Math.pow(12, 3));
console.log("Math.pow--", Math.pow(90, 4));


console.log("---------- 8. dayInWeek && monthInYear------------");

function dayInWeek (day){
    if (day == 1) {
        return `monday is the ${day} day of the week`;
    }
    else if (day == 2) {
        return `tuesday is the ${day} day of the week`;
    }
    else if (day == 3) {
        return `wednesday is the ${day} day of the week`;
    }
    else if (day == 4) {
        return `thursday is the ${day} day of the week`;
    }
    else if (day == 5) {
        return `friday is the ${day} day of the week`;
    }
    else if (day == 6) {
        return `saturday is the ${day} day of the week`;
    }
    else if (day == 7) {
        return `sunday is the ${day} day of the week`;
    }
    else {
        return `ops!! it's  wrong number`;
    }
}

let dayNumber = "2";
let day = dayInWeek (dayNumber)
console.log(day)

console.log("---------- 8. dayInWeek && monthInYear------------");
function monthInYear (month){
    if (month == 1) {
        return `January is the ${month} month of the year`;
    }
    else if (month == 2) {
        return `February is the ${month} month of the year`;
    }
    else if (month == 3) {
        return `March is the ${month} month of the year`;
    }
    else if (month == 4) {
        return `April is the ${month} month of the year`;
    }
    else if (month == 5) {
        return `May is the ${month} month of the year`;
    }
    else if (month == 6) {
        return `June is the ${month} month of the year`;
    }
    else if (month == 7) {
        return `July is the ${month} month of the year`;
    }
    else if (month == 8) {
        return `August is the ${month} month of the year`;
    }
    else if (month == 9) {
        return `September is the ${month} month of the year`;
    }
    else if (month == 10) {
        return `October is the ${month} month of the year`;
    }
    else if (month == 11) {
        return `November is the ${month} month of the year`;
    }
    else if (month == 12) {
        return `December is the ${month} month of the year`;
    }
    else {
        return `try again , enter the valid number`;
    }
}
let monthOfNumber = "2";
let month =  monthInYear (monthOfNumber)
console.log(month)


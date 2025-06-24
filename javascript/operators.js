//NOTE - Operators:

/*
1. Arithematic Operator

+, -, *, /, //, %

2. Comparision Operator

>, <, ==, ===, !=

3. Assignment Operator
=, +=, -=, *=, /=

4. Ternary Operator

expression ? statement: statement

5. Logical Operator
&&, ||, !, ?? 

6. Bitwise Operator

&, |, ^

7. typeof Operator

typeof

*/

let a = 3;
let b = "3";

console.log(a == b);
console.log(a === b);

console.log((a += 3)); //a = a+3

console.log(a > 3 ? "Hello" : "Hi");

a = null;

console.log(a ?? "hello");

console.log(typeof b);
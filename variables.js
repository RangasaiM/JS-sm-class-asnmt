// 1. Global Scope
// A variable declared outside of any function or block is in the global scope.

// It can be accessed anywhere in the script.

let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar); // Accessible here
}

showGlobal();
console.log(globalVar); // Also accessible here

// 2. Local Function Scope
// Variables declared inside a function using var, let, or const are local to that function.

// Cannot be accessed outside the function.

function greet() {
    let localVar = "Hello";
    console.log(localVar); // Works
}

greet();
// console.log(localVar); // Error: localVar is not defined


// 3. Block Scope 
// Variables declared with let or const inside {} (if/for/while blocks) are block scoped.

// var is not block-scoped — it ignores blocks!

if (true) {
    let blockLet = "I'm block scoped";
    const blockConst = "Me too";
    var blockVar = "I'm NOT block scoped!";
}

// console.log(blockLet);   // Error
// console.log(blockConst); // Error
console.log(blockVar);     //  "I'm NOT block scoped!"


// Variable Shadowing
// Occurs when a variable declared in an inner scope has the same name as one in an outer scope.

// It "shadows" or hides the outer variable.


let name = "Outer";
function sayName() {
    let name = "Inner"; // shadows outer 'name'
    console.log(name); // Inner
}

sayName();
console.log(name); // Outer


for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}


for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 0);
}


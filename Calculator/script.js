const buttons = document.querySelector(".buttons");
let operand_1;
let operand_2;

// Function buttons
const clear = document.querySelector(".clear");
const negative = document.querySelector(".negative");
const percent = document.querySelector(".percent");

// Operators
const divisionBtn = document.querySelector(".item3");
const multiplyBtn = document.querySelector(".item3");
const addBtn = document.querySelector(".item3");
const subtractBtn = document.querySelector(".item3");
const comma = document.querySelector(".comma");
const Equals = document.querySelector(".equals");

clear.addEventListener("click", () => {
    console.log("Clear is pressed");
});

const addFunction = () => {
    console.log(operand_1 + operand_2)
};
const subtractFunction = () => {
    console.log(operand_1 - operand_2)
};
const divisionFunction = () => {
    console.log(operand_1 / operand_2)
};
const multiplyFunction = () => {
    console.log(operand_1 * operand_2)
};



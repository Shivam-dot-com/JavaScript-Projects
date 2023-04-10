const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".log-left");
const logsRight = document.querySelectorAll(".log-right");
const carsLeft = document.querySelectorAll(".car-left");
const carsRight = document.querySelectorAll(".car-right");
console.log(carsLeft);
console.log(carsRight);

let width = 9;

console.log(squares); // TODO Good help in counting like array, check console

let currentIndex = 76; //Starting block

function moveFrog(e) {
    // console.log(e); // * So much Information by this Statement

    squares[currentIndex].classList.remove("frog");

    switch (e.key) {
        case "ArrowLeft":
            // * console.log("Move Left");
            if (currentIndex % width !== 0) currentIndex -= 1; //*Understand all Logic
            break;
        case "ArrowRight":
            // * console.log("Move Right");
            if (currentIndex % width < width - 1) currentIndex += 1;
            break;
        case "ArrowUp":
            // * console.log("Move Up");
            if (currentIndex - width >= 0) currentIndex -= width;
            break;
        case "ArrowDown":
            // * console.log("Move Down");
            if (currentIndex + width < width * width) currentIndex += width;
            break;
    }
    squares[currentIndex].classList.add("frog");
}
document.addEventListener("keyup", moveFrog);

function autoMoveElements() {
    logsLeft.forEach((logLeft) => moveLogLeft(logLeft));
    logsRight.forEach((logRight) => moveLogRight(logRight));
    carsLeft.forEach((carLeft) => moveCarLeft(carLeft));
    carsRight.forEach((carRight) => moveCarRight(carRight));
    // console.log("Moving");
}

function moveLogLeft(logLeft) {
    switch (true) {
        case logLeft.classList.contains("l1"):
            logLeft.classList.remove("l1");
            logLeft.classList.add("l2");
            break;
        case logLeft.classList.contains("l2"):
            logLeft.classList.remove("l2");
            logLeft.classList.add("l3");
            break;
        case logLeft.classList.contains("l3"):
            logLeft.classList.remove("l3");
            logLeft.classList.add("l4");
            break;
        case logLeft.classList.contains("l4"):
            logLeft.classList.remove("l4");
            logLeft.classList.add("l5");
            break;
        case logLeft.classList.contains("l5"):
            logLeft.classList.remove("l5");
            logLeft.classList.add("l1");
            break;
    }
}
function moveLogRight(logRight) {
    switch (true) {
        case logRight.classList.contains("l1"):
            logRight.classList.remove("l1");
            logRight.classList.add("l5");
            break;
        case logRight.classList.contains("l2"):
            logRight.classList.remove("l2");
            logRight.classList.add("l1");
            break;
        case logRight.classList.contains("l3"):
            logRight.classList.remove("l3");
            logRight.classList.add("l2");
            break;
        case logRight.classList.contains("l4"):
            logRight.classList.remove("l4");
            logRight.classList.add("l3");
            break;
        case logRight.classList.contains("l5"):
            logRight.classList.remove("l5");
            logRight.classList.add("l4");
            break;
    }
}

function moveCarLeft(carLeft) {
    switch (true) {
        case carLeft.classList.contains("c1"):
            carLeft.classList.remove("c1");
            carLeft.classList.add("c2");
            break;
        case carLeft.classList.contains("c2"):
            carLeft.classList.remove("c2");
            carLeft.classList.add("c3");
            break;
        case carLeft.classList.contains("c3"):
            carLeft.classList.remove("c3");
            carLeft.classList.add("c1");
            break;
    }
}

function moveCarRight(carRight) {
    switch (true) {
        case carRight.classList.contains("c1"):
            carRight.classList.remove("c1");
            carRight.classList.add("c3");
            break;
        case carRight.classList.contains("c2"):
            carRight.classList.remove("c2");
            carRight.classList.add("c1");
            break;
        case carRight.classList.contains("c3"):
            carRight.classList.remove("c3");
            carRight.classList.add("c2");
            break;
    }
}

setInterval(autoMoveElements, 1000);
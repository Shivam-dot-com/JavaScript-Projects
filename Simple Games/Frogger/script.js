const timeLeftDisplay = document.querySelector("#time-left");
const resultDisplay = document.querySelector("#result");
const startPauseButton = document.querySelector("#start-pause-button");
const squares = document.querySelectorAll(".grid div");
let width = 9;

console.log(squares); // TODO Good help in counting like array, check console

let currentIndex = 76; //Starting block

function moveFrog(e) {
    // console.log(e); // * So much Information by this Statement

    squares[currentIndex].classList.remove("frog");

    switch (e.key) {
        case "ArrowLeft":
            console.log("Move Left");
            if (currentIndex % width !== 0) currentIndex -= 1; //*Understand all Logic
            break;
        case "ArrowRight":
            console.log("Move Right");
            if (currentIndex % width < width - 1) currentIndex += 1;
            break;
        case "ArrowUp":
            console.log("Move Up");
            if (currentIndex - width >= 0) currentIndex -= width;
            break;
        case "ArrowDown":
            console.log("Move Down");
            if (currentIndex + width < width * width) currentIndex += width;
            break;
    }
    squares[currentIndex].classList.add("frog");
}
document.addEventListener("keyup", moveFrog);

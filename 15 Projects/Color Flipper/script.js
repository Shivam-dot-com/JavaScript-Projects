const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
    //* get a random number between 0-3 colors[0,length-1]
    const randomNumber = getRandomNumber();
    console.log(
        `🚀 ~ file: script.js:8 ~ btn.addEventListener ~ randomNumber:`,
        randomNumber
    );
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

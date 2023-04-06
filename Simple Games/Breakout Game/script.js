// TODO declarations
const grid = document.querySelector(".grid");
const scoreDisplay = document.querySelector("#score");
const blockWidth = 100;
const ballDiameter = 20;
const blockHeight = 20;
const boardWidth = 560;
const boardHeight = 300;
let timerId;
let xDirection = 2;
let yDirection = 2;

const userStart = [230, 10];
let currentPosition = userStart;

const ballStart = [270, 40];
let ballCurrentPosition = ballStart;

// TODO Create Block class
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockWidth, yAxis];
        this.topLeft = [xAxis, yAxis + blockHeight];
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight];
    }
}

// All my blocks
const blocks = [
    new Block(10, 270),
    new Block(120, 270),
    new Block(230, 270),
    new Block(340, 270),
    new Block(450, 270),
    new Block(10, 240),
    new Block(120, 240),
    new Block(230, 240),
    new Block(340, 240),
    new Block(450, 240),
    new Block(10, 210),
    new Block(120, 210),
    new Block(230, 210),
    new Block(340, 210),
    new Block(450, 210),
];

// Draw all my block
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocks[i].bottomLeft[0] + "px";
        block.style.bottom = blocks[i].bottomLeft[1] + "px";
        grid.appendChild(block);
    }
}
addBlocks();

// TODO draw user
function drawUser() {
    user.style.left = currentPosition[0] + "px";
    user.style.bottom = currentPosition[1] + "px";
}

// TODO draw the ball
function drawBall() {
    ball.style.left = ballCurrentPosition[0] + "px";
    ball.style.bottom = ballCurrentPosition[1] + "px";
}

// TODO Add User
const user = document.createElement("div");
user.classList.add("user");
drawUser();
grid.appendChild(user);

// TODO Move User
function moveUser(e) {
    switch (e.key) {
        case "ArrowLeft":
            if (currentPosition[0] > 0) {
                currentPosition[0] -= 10;
                drawUser();
            }
            break;
        case "ArrowRight":
            if (currentPosition[0] < boardWidth - blockWidth) {
                currentPosition[0] += 10;
                drawUser();
            }
            break;
    }
}

document.addEventListener("keydown", moveUser);

// TODO add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

// TODO move ball
function moveBall() {
    ballCurrentPosition[0] += xDirection;
    ballCurrentPosition[1] += yDirection;
    drawBall();
    checkForCollisions();
}

timerId = setInterval(moveBall, 30);

// TODO check for collisions
function checkForCollisions() {
    // Check for wall collisions
    if (
        ballCurrentPosition[0] >= boardWidth - ballDiameter ||
        ballCurrentPosition[1] >= boardHeight - ballDiameter ||
        ballCurrentPosition[0] <= 0
    ) {
        changeDirection();
    }
    //! Check for Game Over
    if (ballCurrentPosition[1] <= 0) {
        clearInterval(timerId); //?
        scoreDisplay.innerHTML = "You loose";
        document.removeEventListener("keydown", moveUser);
    }
}

// TODO Change Direction
function changeDirection() {
    if (xDirection === 2 && yDirection === 2) {
        yDirection = -2;
        return;
    }
    if (xDirection === 2 && yDirection === -2) {
        xDirection = -2;
        return;
    }
    if (xDirection === -2 && yDirection === -2) {
        yDirection = 2;
        return;
    }
    if (xDirection === -2 && yDirection === 2) {
        xDirection = 2;
        return;
    }
}

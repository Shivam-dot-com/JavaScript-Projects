const cardArray = [
    {
        name: "Img-1",
        img: "Images/Img-1.png",
    },
    {
        name: "Img-2",
        img: "Images/Img-2.png",
    },
    {
        name: "Img-3",
        img: "Images/Img-3.png",
    },
    {
        name: "Img-4",
        img: "Images/Img-4.png",
    },
    {
        name: "Img-5",
        img: "Images/Img-5.png",
    },
    {
        name: "Img-6",
        img: "Images/Img-6.png",
    },
    {
        name: "Img-1",
        img: "Images/Img-1.png",
    },
    {
        name: "Img-2",
        img: "Images/Img-2.png",
    },
    {
        name: "Img-3",
        img: "Images/Img-3.png",
    },
    {
        name: "Img-4",
        img: "Images/Img-4.png",
    },
    {
        name: "Img-5",
        img: "Images/Img-5.png",
    },
    {
        name: "Img-6",
        img: "Images/Img-6.png",
    },
];

cardArray.sort(() => 0.5 - Math.random()); //For Creating random cards

const gridDisplay = document.querySelector(".grid");
const resultDisplay = document.querySelector("#result");

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// * Board
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement("img");
        card.setAttribute("src", "Images/Find-Out.png");
        card.setAttribute("data-id", i);
        card.addEventListener("click", flipCard);
        gridDisplay.appendChild(card);
    }
}

createBoard();

// Checking Match
function checkMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenIds[0];
    const optionTwoId = cardsChosenIds[1];

    if (optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute("src", "Images/Find-Out.png");
        cards[optionTwoId].setAttribute("src", "Images/Find-Out.png");
        alert("You clicked the same Image!");
    } else if (cardsChosen[0] == cardsChosen[1]) {
        // alert("You found a match :)")
        cards[optionOneId].setAttribute("src", "Images/Correct.png");
        cards[optionTwoId].setAttribute("src", "Images/Correct.png");
        cards[optionOneId].removeEventListener("click", flipCard);
        cards[optionTwoId].removeEventListener("click", flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[optionOneId].setAttribute("src", "Images/Find-Out.png");
        cards[optionTwoId].setAttribute("src", "Images/Find-Out.png");
    }
    resultDisplay.textContent = `Score : ${cardsWon.length}`;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = "Congratulation You found them All";
    }
}

// Flip Card
function flipCard() {
    console.log(cardArray);
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    console.log(cardsChosen);
    console.log(cardsChosenIds);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
        setTimeout(checkMatch, 250);
    }
}

// Note : This keyword will allow us get whatever we click
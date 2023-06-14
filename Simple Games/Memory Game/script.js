const cardArray = [
    {
        name: "Img-1",
        img: "images/img-1.jpeg"
    },
    {
        name: "Img-2",
        img: "images/img-2.jpeg"
    },
    {
        name: "Img-3",
        img: "images/img-3.jpeg"
    },
    {
        name: "Img-4",
        img: "images/img-4.jpeg"
    },
    {
        name: "Img-5",
        img: "images/img-5.jpeg"
    },
    {
        name: "Img-6",
        img: "images/img-6.jpeg"
    },
    {
        name: "Img-1",
        img: "images/img-1.jpeg"
    },
    {
        name: "Img-2",
        img: "images/img-2.jpeg"
    },
    {
        name: "Img-3",
        img: "images/img-3.jpeg"
    },
    {
        name: "Img-4",
        img: "images/img-4.jpeg"
    },
    {
        name: "Img-5",
        img: "images/img-5.jpeg"
    },
    {
        name: "Img-6",
        img: "images/img-6.jpeg"
    }
]

cardArray.sort(() => 0.5 - Math.random()) //For Creating random cards

const gridDisplay = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')

let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

// * Board
function createBoard() { 
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/img-blank.jpeg')
        card.setAttribute('data-id', i)
        card.addEventListener("click",flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

// Checking Match
function checkMatch() { 
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId == optionTwoId) { 
        cards[optionOneId].setAttribute('src', 'images/img-blank.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/img-blank.jpeg')
        alert("You clicked the same Image!")
        
    }
    else if (cardsChosen[0] == cardsChosen[1]) {
        // alert("You found a match :)")
        cards[optionOneId].setAttribute('src', 'images/img-need.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/img-need.jpeg')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {  
        cards[optionOneId].setAttribute('src', 'images/img-blank.jpeg')
        cards[optionTwoId].setAttribute('src', 'images/img-blank.jpeg')
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];
    if (cardsWon.length == cardArray.length / 2) {
        resultDisplay.textContent = "Congratulation You found them All"
    }
}

// Flip Card
function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) { 
        setTimeout(checkMatch, 500)
    }
}

// Note : This keyword will allow us get whatever we click
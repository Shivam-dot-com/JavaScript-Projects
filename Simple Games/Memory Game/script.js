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

const gridDisplay = document.querySelector('#grid')
const cardChosen = [];

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

// Flip Card
function flipCard() {
    console.log(cardArray)
    const cardId = this.getAttribute('data-id')
    cardChosen.push(cardArray[cardId].name)
    console.log("Clicked", cardId)
    console.log(cardChosen)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardChosen.length === 2) { 
        
    }
}

// Note : This keyword will allow us get whatever we click
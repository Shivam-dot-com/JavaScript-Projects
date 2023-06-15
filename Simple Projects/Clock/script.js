let hourHand = document.querySelector('[data-hour-hand]')
let minuteHand = document.querySelector('[data-minute-hand]')
let secondHand = document.querySelector('[data-second-hand]')


function setClock() { 
    const currentDate = new Date
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    setRotation(hourHand,hoursRatio)
    setRotation(minuteHand,minutesRatio)
    setRotation(secondHand,secondsRatio)
}

function setRotation(element,rotationRatio) { 
    element.style.setProperty('--rotation',rotationRatio * 360)
}

setInterval(setClock, 1000)
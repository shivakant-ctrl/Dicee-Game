// Random Number 1
let randomNumber1 = Math.floor(Math.random() * 6) + 1

// Random Number 2
let randomNumber2 = Math.floor(Math.random() * 6) + 1

// New Image 1
let firstImgNewSrc = `./images/dice${randomNumber1}.png`

// New Image 2
let secondImgNewSrc = `./images/dice${randomNumber2}.png`

document.getElementsByClassName('img1')[0].setAttribute('src', `./images/dice${randomNumber1}.png`)
document.getElementsByClassName('img2')[0].setAttribute('src', `./images/dice${randomNumber2}.png`)

if(randomNumber1 > randomNumber2) {
    // Player 1 Wins
    document.querySelector('h1').innerHTML = '🚩Player 1 Wins!'
} else if(randomNumber2 > randomNumber1) {
    // Player 2 Wins 
    document.querySelector('h1').innerHTML = 'Player 2 Wins🚩'
} else {
    document.querySelector('h1').innerHTML = 'Draw!'
}
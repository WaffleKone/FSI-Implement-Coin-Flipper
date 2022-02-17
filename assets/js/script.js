// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})

let totalFlips = 0
let timesHeads = 0
let timesTails = 0

let percHeads = 0
let percTails = 0

let coinFlipNum

const coinFlipAudio = new Audio('assets/sounds/coin-flip.mp3')
coinFlipAudio.volume = 0.2

document.getElementById("flip").addEventListener("click", function(){
    coinFlipNum = Math.round(Math.random())
    if (coinFlipNum == 0 ) { // We use 0 as tails in this case
        coinFlipAudio.play()
        timesTails += 1
        totalFlips += 1
        document.getElementById("penny-img").src = "assets/images/penny-tails.jpg"
        document.getElementById("tails").textContent = (timesTails)
        document.getElementById("responder").textContent = "You rolled tails!"
        percHeads = (Math.round(timesHeads / totalFlips * 100))
        percTails = (Math.round(timesTails / totalFlips * 100))
        document.getElementById("heads-percent").textContent = (`${percHeads}%`)
        document.getElementById("tails-percent").textContent = (`${percTails}%`)
    }
    if (coinFlipNum == 1) { // We use 1 as heads in this case
        coinFlipAudio.play()
        timesHeads += 1
        totalFlips += 1
        document.getElementById("penny-img").src = "assets/images/penny-heads.jpg"
        document.getElementById("heads").textContent = (timesHeads)
        document.getElementById("responder").textContent = "You rolled heads!"
        percHeads = (Math.round(timesHeads / totalFlips * 100))
        percTails = (Math.round(timesTails / totalFlips * 100))
        document.getElementById("heads-percent").textContent = (`${percHeads}%`)
        document.getElementById("tails-percent").textContent = (`${percTails}%`)
    }
})

document.getElementById("clear").addEventListener("click", function(){
    totalFlips = timesHeads = timesTails = percHeads = percTails = 0
    document.getElementById("heads-percent").textContent = (`${percHeads}%`)
    document.getElementById("tails-percent").textContent = (`${percTails}%`)
    document.getElementById("heads").textContent = (timesHeads)
    document.getElementById("tails").textContent = (timesTails)
    document.getElementById("responder").textContent = "Cleared the scoreboard!"
})

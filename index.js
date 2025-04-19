let homeScore = parseInt(document.getElementById("home-score").innerText)
let guestScore = parseInt(document.getElementById("guest-score").innerText)

console.log(homeScore)
console.log(guestScore)

function addScore(team, points) {
    let el = document.getElementById(`${team}-score`)
    let current = parseInt(el.innerText)
    el.innerText = current + points
} 

function reset() {
    let homeEl = parseInt(document.getElementById("home-score").innerText)
    let guestEl = parseInt(document.getElementById("guest-score").innerText)
    let prevResultsEl = document.getElementById("prevResults")
    let newResult = homeEl + ":" + guestEl

    if (prevResultsEl.innerText === "Previous Games:") {
        prevResultsEl.innerText += " " + newResult
    } else {
        prevResultsEl.innerText += " — " + newResult
    }

    
    document.getElementById("home-score").innerText = 0
    document.getElementById("guest-score").innerText = 0
    
}


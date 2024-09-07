let countEl = document.getElementById("count-value")
let saveEl = document.getElementById("saved-value")
let totalEl = document.getElementById("total-value")

let count = 0
let totalCount = 0
let saveState = 1

function increment() {
    count += 1
    countEl.textContent = count
}

function decrement() {
    if (count > 0) {
        count -= 1
    }
    countEl.textContent = count
}

function getFormattedDateTime() {
    const now = new Date();
  
    const options = {
    //   weekday: 'short',
    //   month: 'short',
    //   day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    }
  
    return now.toLocaleString('en-US', options)
}

function save() {
    if (count < 1) {
        return false
    }

    let countedFor = count
    totalCount += countedFor
    let counts = (count > 1) ? "Glasses" : "Glass"

    const formattedDateTime = getFormattedDateTime()

    saveEl.innerHTML += `
        <div>
            <p>Drinking <strong>${countedFor}</strong> ${counts} of water at ${formattedDateTime}</p>
        </div>
    `

    count = 0
    countEl.textContent = count
    totalEl.textContent = "I have drank " + totalCount + " glasses of water today!"
}
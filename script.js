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

function save() {
    let countedFor = count
    totalCount += countedFor
    let counts = (count > 1) ? "Counts" : "Count"
    saveEl.innerHTML += `
        <div>
            <p>Save ${saveState++}: ${countedFor} ${counts}</p>
        </div>
    `
    count = 0
    countEl.textContent = count
    totalEl.textContent = "Total: " + totalCount + " Counted so far "
}
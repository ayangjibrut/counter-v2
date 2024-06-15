let countEl = document.getElementById("count-value")
let saveEl = document.getElementById("saved-value")
let count = 0
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
    let counts = (count > 1) ? "Counts" : "Count"
    saveEl.innerHTML += `
        <div>
            <h2 id="saved-value">Save ${saveState++}: ${countedFor} ${counts}</h2>
        </div>
    `
    count = 0
    countEl.textContent = count
}
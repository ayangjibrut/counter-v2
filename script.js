let countEl = document.getElementById("count-value")
let saveEl = document.getElementById("saved-value")
let count = 0

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
    let countedFor = count + " - "
    saveEl.textContent += countedFor
    count = 0
    countEl.textContent = count
}
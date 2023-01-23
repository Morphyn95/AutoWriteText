const container = document.getElementById('text')

const text = 'hello world !!'
const limit = text.length
const interval = 400

let index = 0

const idInterval = setInterval(() => {
    if (index <= limit) {
    container.innerText = text.slice(0, index++)
    } else {
        clearInterval(idInterval)
    }
}, interval);
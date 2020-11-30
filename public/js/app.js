
const weatherForum = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


messageOne.textContent = 'From javascript'

weatherForum.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('/weather?address=' + location).then((resonse) => {
        resonse.json().then((data) => {
            if (data.error) {
                messageOne.textContent = ''
                messageTwo.textContent = data.error
                console.log(data.error)
            }
            else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
                console.log(data.location)
                console.log(data.forecast)
            }
        })
    })
})
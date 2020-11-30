console.log('Client side')

// fetch('http://localhost:3000/weather?address=Boston').then((resonse) => {
//     resonse.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         }
//         else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherForum = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')


messageOne.textContent = 'From javascript'

weatherForum.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value
    const webAddress = 'http://localhost:3000/weather?address=' + location

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch(webAddress).then((resonse) => {
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
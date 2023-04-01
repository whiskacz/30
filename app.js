const div = document.querySelector('.outputDiv')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameURL = name.value
    const surnameURL = surname.value

    const params  = new URLSearchParams({
        nameURL,
        surnameURL
    })

    const URL = `http://localhost:3000/?` + params

    div.innerHTML = URL
})

const div = document.querySelector('.outputDiv')
const name = document.querySelector('#name')
const surname = document.querySelector('#surname')
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const nameURL = name.value
    const surnameURL = surname.value

    const URL = `http://localhost:3000/?name=${encodeURIComponent(nameURL)}&surname=${encodeURIComponent(surnameURL)}`

    div.innerHTML = URL
})

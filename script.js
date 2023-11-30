const container = document.querySelector('.container')
const form = document.querySelector('form')
const input = document.querySelector('input')
const submit_btn = document.querySelector('.submit-btn')
const modal = document.querySelector('.modal')
const dismiss_btn = document.querySelector('.dismiss-btn')
const overlay = document.querySelector('.overlay')
const email = document.querySelector('.success-email')

form.addEventListener('submit', e => {
    e.preventDefault()
    modal.show()
    if (input.value.includes('@')) {
        input.classList.remove('error')
        error.textContent = ''
    }
    overlay.style.display = 'block'
    email.innerText = input.value
})

submit_btn.addEventListener('click', () => {
    // input.setCustomValidity = ''
    if (input.value == '' || !input.value.includes('@')) {
        form.classList.add('error')
        error.textContent = 'Enter valid email'
    } else {
        input.classList.remove('error')
        error.textContent = ''
    }
})

dismiss_btn.addEventListener('click', () => { 
    modal.close() 
    overlay.style.display = 'none'
    input.value = ''
})
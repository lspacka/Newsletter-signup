const container = document.querySelector('.container')
const form = document.querySelector('form')
const input = document.querySelector('input')
const submit_btn = document.querySelector('.submit-btn')
const modal = document.querySelector('.modal')
const dismiss_btn = document.querySelector('.dismiss-btn')
const overlay = document.querySelector('.overlay')
const email = document.querySelector('.success-email')
const error_msg = document.querySelector('.error')
const regex = /^[^\s@]+@[^\s@]+\.(?=[a-zA-Z]{2,})[^\s@]+$/

form.addEventListener('submit', e => {
    e.preventDefault()
    // Check email validity before showing the modal
    if (isValidEmail(input.value)) {
        modal.show()
        overlay.style.display = 'block'
    } else  {
        error_msg.innerText = 'Valid email required'
    }
});

submit_btn.addEventListener('click', () => {
    // Check email validity before updating the email element
    if (isValidEmail(input.value)) {
        email.innerText = input.value
        error_msg.innerText = ''
    } else {
        error_msg.innerText = 'Valid email required'
    }
});

dismiss_btn.addEventListener('click', () => {
    modal.close()
    overlay.style.display = 'none'
});

function isValidEmail(email) {
    return regex.test(email)
}

input.addEventListener('input', () => {
    error_msg.innerText = ''
})
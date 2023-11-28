const container = document.querySelector('.container')
const submit_btn = document.querySelector('.submit-btn')
const modal = document.querySelector('.modal')
const dismiss_btn = document.querySelector('.dismiss-btn')

submit_btn.addEventListener('click', (e) => {
    e.preventDefault()
    modal.show()
    // blur body or container ?
})

dismiss_btn.addEventListener('click', () => { modal.close() })
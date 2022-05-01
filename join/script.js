
const form = document.querySelector('#form_register')
const alert = document.querySelector('#alert_error')
const btn_submit = document.querySelector('#button_submit')
const btn_loading = document.querySelector('#button_loading')

if (new URLSearchParams(window.location.search).get('status') === 'error') {
  alert.style.display = 'block'
}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    btn_submit.style.display = 'none'
    btn_loading.style.display = 'block'

    const formData = new FormData(form).entries()
    try {
        const res = await register(formData)

        if (res.status === 200) {
            direct_success()
        } else {
            redirect_error()
        }
    } catch (err) {
        console.log(err)
        redirect_error()
    }
})

function redirect_error() {
    window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + '?status=error'
}

function direct_success() {
    window.location.href = window.location.origin + '/wer-ist-dabei?status=success'
}


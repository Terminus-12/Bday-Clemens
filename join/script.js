
const form = document.querySelector('#form_register')
const alert = document.querySelector('#alert_error')
const btn_submit = document.querySelector('#button_submit')
const btn_loading = document.querySelector('#button_loading')

let modal_bed_first_toggle = true
const modal_need_bed = document.querySelector('#modal_need_bed')
let modal_nerd_first_toggle = true
const modal_nerd = document.querySelector('#modal_nerd')

if (new URLSearchParams(window.location.search).get('status') === 'error') {
  alert.style.display = 'block'
}

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    btn_submit.style.display = 'none'
    btn_loading.style.display = 'block'

    const form_data = new FormData(form)
    const data = {}
    for (const form_keys of form_data.keys()) {
        data[form_keys] = form_data.get(form_keys)
    }

    try {
        const res = register(data)
        res.then(res => console.log(res))

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
    // window.location.href = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1) + '?status=error'
}

function direct_success() {
    // window.location.href = window.location.origin + '/wer-ist-dabei?status=success'
}

function toggle_modal_need_bed() {
    if (modal_bed_first_toggle) {
        const modal = new bootstrap.Modal(modal_need_bed);
        modal.show()
        modal_bed_first_toggle = false
    }
}

function toggle_modal_nerd() {
    if (modal_nerd_first_toggle) {
        const modal = new bootstrap.Modal(modal_nerd);
        modal.show()
        modal_nerd_first_toggle = false
    }
}

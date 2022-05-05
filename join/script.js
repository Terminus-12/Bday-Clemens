
const form = document.querySelector('#form_register')
const alert_error = document.querySelector('#alert_error')
const alert_invalid_name = document.querySelector('#alert_invalid_name')
const btn_submit = document.querySelector('#button_submit')
const btn_loading = document.querySelector('#button_loading')

let modal_bed_first_toggle = true
const modal_need_bed = document.querySelector('#modal_need_bed')
let modal_nerd_first_toggle = true
const modal_nerd = document.querySelector('#modal_nerd')

if (new URLSearchParams(window.location.search).get('status') === 'error') {
  alert_error.style.display = 'block'
}

const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const form_data = new FormData(form)
    const regex_name =  /^([a-z]| |\.|ö|ä|ü|ß|'|-)+$/i

    if (!regex_name.test(form_data.get("forename"))
        || !regex_name.test(form_data.get("surname"))) {
        return alert_invalid_name.style.display = 'block'
    }

    btn_submit.style.display = 'none'
    btn_loading.style.display = 'block'

    const form_body_urlencoded = []
    for (const form_key of form_data.keys()) {
        const encoded_key = encodeURIComponent(form_key)
        const encoded_value = encodeURIComponent(form_data.get(form_key))
        form_body_urlencoded.push(encoded_key + "=" + encoded_value.trim())
    }

    const form_body_json = {}
    for (const form_key of form_data.keys()) {
        form_body_json[form_key] = form_data.get(form_key)
    }

    try {
        const res = await add_member(form_body_urlencoded.join('&'))

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

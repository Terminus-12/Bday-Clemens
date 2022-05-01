
const alert_success = document.querySelector('#alert_success')
const alert_error = document.querySelector('#alert_error')
const counter = document.querySelector('#member_count')
const table = document.querySelector('#table_guests')
const spinner = document.querySelector('#nav_spinner')

const status = new URLSearchParams(window.location.search).get('status')
if (status === 'success') {
    print_alert_success()
} else if (status === 'error') {
    print_alert_error()
}

async function set_counter() {
    try {
        const res = await get_members_counter()
        if (res.status === 200) {
            counter.innerHTML = res.data.counter

        } else {
            print_alert_error()
        }

    } catch (error) {
        console.log(error)
        print_alert_error()
    }
}

async function fill_table() {
    try {
        const res = await get_members()

        if (res.status === 200) {
            const guests = res.data.guests
            guests.forEach(guest => {
                const row = table.insertRow(-1)
                const cell_forename = row.insertCell(0)
                const cell_surname = row.insertCell(1)

                cell_forename.innerHTML = guest.forename
                cell_surname.innerHTML = guest.surname
            })
        } else {
            print_alert_error()
        }

    } catch (error) {
        console.log(error)
        print_alert_error()
    }
}

function print_alert_error() {
    if (alert_error.style.display === 'none') {
        alert_error.style.display = 'block'
    }
    spinner.style.display = 'none'
}

function print_alert_success() {
    if (alert_success.style.display === 'none') {
        alert_success.style.display = 'block'
    }
}

spinner.style.display = 'initial'
set_counter().then(() => {
    fill_table().then(() => {
        spinner.style.display = 'none'
    })
})

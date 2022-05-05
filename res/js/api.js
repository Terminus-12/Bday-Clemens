
const api_base = 'http://localhost:8099/bday/'

async function add_member(data) {
    return fetch(api_base + 'member', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
}

async function get_members() {
    return fetch(api_base + 'members/public')
}

async function get_members_counter() {
    return fetch(api_base + 'members/count')
}

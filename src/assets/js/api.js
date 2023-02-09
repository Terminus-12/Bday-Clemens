

export async function add_member(base, data) {
    return fetch(base + 'guest', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: data
    })
}

export async function get_members(base) {
    return fetch(base + 'guests/public')
}

export async function get_members_counter(base) {
    return fetch(base + 'guests/count')
}

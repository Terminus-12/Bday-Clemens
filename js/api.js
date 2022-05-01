
const api_base = 'https://api.schaut.dev/bday/'

function register(data) {
  return fetch(api_base + 'register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
}

function get_members() {
  return fetch(api_base + 'members')
}

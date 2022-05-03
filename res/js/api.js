
const api_base = 'http://localhost:8080/bday/';

function register(data) {
  console.log(data)
  return fetch(api_base + 'member', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
    mode: 'no-cors'
  })
}

async function get_members() {
  return await fetch(api_base + 'members')
}

async function get_members_counter() {
  return await fetch(api_base + 'members_count')
}

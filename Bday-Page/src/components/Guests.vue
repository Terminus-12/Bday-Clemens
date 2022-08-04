<template>
    <div v-if="$route.params.status === 'success'" class="alert alert-success" role="alert" id="alert_success" style="text-align: center">
        {{ this.status.success }}
    </div>
    <div v-if="$route.params.status === 'error'" class="alert alert-danger" role="alert" id="alert_error" style="text-align: center">
        {{ this.status.error }}
    </div>

    <div class="numbers">
        <p class="">{{ this.guests.count.pre }}</p>
        <p id="member_count" class="huge">{{ this.guests.count.value }}</p>
        <p class="big">{{ this.guests.count.post }}</p>
    </div>

    <div class="guests">
        <p class="big text-decoration-underline"><b> {{ this.guests.title }} </b></p>
        <table class="table table-striped">
            <tr>
                <th scope="col">{{ this.guests.forename }}</th>
                <th scope="col">{{ this.guests.surname }}</th>
            </tr>
            <tr v-for="guest in this.guests.list.value">
                <td>{{ guest.forename }}</td>
                <td>{{ guest.surname }}</td>
            </tr>
        </table>
    </div>
</template>

<script>
import { get_members, get_members_counter } from '../assets/js/api.js';
import { ref } from 'vue'

export default {
    name: "Guests",
    data() {
        return {
            guests: {
                title: "Gästeliste",
                forename: "Vorname",
                surname: "Nachname",
                count: {
                    pre: "Schon",
                    value: ref("??"),
                    post: "SIND DABEI!"
                },
                list: ref([])
            },

            api_base: "https://api.schaut.dev/bday/",

            status: {
                success: "Du hast dich erfolgreich registriert!",
                error: "Error! Cannot fetch bday_members!"
            }
        }
    },
    async created() {
        await set_guest_counter(this.guests.count);
        await fill_guest_list(this.guests.list);
    }
}

async function set_guest_counter(counter) {
    try {
        const res = await get_members_counter()
        if (res.status === 200) {
            //counter.value = await res.text();
            counter.value = "5"

        } else {
            print_alert_error()
        }

    } catch (error) {
        console.log(error)
        print_alert_error()
    }
}

async function fill_guest_list(list) {
    try {
        const res = await get_members()

        if (res.status === 200) {
            //list.value = await res.json()
            list.value = [
                {
                    forename: "Max",
                    surname: "Mustermann"
                }
            ]


        } else {
            print_alert_error()
        }

    } catch (error) {
        console.log(error)
        print_alert_error()
    }
}

function print_alert_error() {

}
</script>

<style scoped>
.numbers {
    display: flex;
    flex-direction: column;

    margin-top: 30px;

    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
}

.guests {
    width: 400px;
    text-align: center;
    margin: 30px auto 50px;
}

table {
    margin-bottom: 30px;
}

</style>
<template>
    <!-- Alerts ------------------------------------------------------->
    <div v-if="$route.params.status === 'error'" v-html="status.error" id="alert_error" class="form alert alert-danger" role="alert" />
    <div v-if="$route.params.status === 'not_acceptable'" v-html="status.not_acceptable" id="alert_invalid_name" class="form alert alert-danger" role="alert" />
    <div v-if="$route.params.status === 'duplicate'" v-html="status.duplicate" id="alert_not_acceptable" class="form alert alert-danger" role="alert" />
    <!----------------------------------------------------------------->


    <!-- From ------------------------------------------------------->
    <div class="form-intro">
        <p class="big"><b>Melde dich an!</b></p>
        <p>Damit stehst du automatisch auf der Gästeliste und bist dabei!</p>
    </div>

    <form @submit.prevent="" id="form_register" class="form needs-validation">
        <div class="mb-3">
            <label for="from_forename" class="form-label">Vorname</label>
            <input type="text" class="form-control" id="from_forename" placeholder="Max" name="forename" required>
        </div>

        <div class="mb-3">
            <label for="from_surname" class="form-label">Nachname</label>
            <input type="text" class="form-control" id="from_surname" placeholder="Mustermann" name="surname" required>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="form_check_sleep" name="need_bed" onclick="toggle_modal_need_bed()" data-bs-target="#modal_need_bed">
            <label class="form-check-label" for="form_check_sleep">
                Ich brauche einen Schlafplatz
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="form_check_has_bed" name="has_bed">
            <label class="form-check-label" for="form_check_has_bed">
                Ich kann einen Schlafplatz anbieten
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="form_check_nerd" name="is_nerd" onclick="toggle_modal_nerd()">
            <label class="form-check-label" for="form_check_nerd">
                Ich will bei einem nerdigen Spiel teilnehmen
            </label>
        </div>

        <div class="form-check">
            <input class="form-check-input" type="checkbox" id="form_check_anonym" name="anonym">
            <label class="form-check-label" for="form_check_anonym">
                Ich möchte <b>nicht</b> in der <a href="/archive/wer-ist-dabeist-dabei">öffentlichen Gästeliste</a> gelistet werden
            </label>
        </div>

        <button id="button_submit" type="submit" class="btn btn-primary form-submit" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hiermit akzeptierst du die Angaben zur Anmeldung in der Datenschutzerklärung">
            Bestätigen
        </button>

        <button id="button_loading" type="submit" class="btn btn-primary form-submit" style="display: none" disabled>
            <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
            Fertigstellen
        </button>
    </form>
    <!----------------------------------------------------------------->


    <!-- Modals ------------------------------------------------------->
    <div class="modal fade" id="modal_need_bed" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><b>Achtung!</b></h5>
                </div>
                <div class="modal-body">
                    Die Schlafplätze sind streng limitiert und sollten nur von Gästen benutzt werden,
                    die einen wirklich langen Weg nach Hause haben. Wenn du in Karlsruhe oder naher Umgebung wohnst,
                    wäre es gut, von einem Schlafplatz abzusehen!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Verstanden!</button>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modal_nerd" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><b>Achtung!</b></h5>
                </div>
                <div class="modal-body">
                    Dieses Spiel ist nur für Hardcore-Nerds geeignet und stellt eine Meta-Ebene über mehrere Stunden des Geburtstags dar!<br>
                    Wenn du also eher chillen willst, dann ist dieses Spiel wahrscheinlich nichts für dich!
                    Wenn du aber auf Spiele wie <i>Secret Hitler</i> stehst, dann bist du herzlich eingeladen!
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Verstanden!</button>
                </div>
            </div>
        </div>
    </div>
    <!----------------------------------------------------------------->
</template>

<script>
export default {
    name: "Join",
    data() {
        return {
            status: {
                error: "Error! Es gab einen Fehler bei der Anmeldung! Du bist noch nicht registriert!",
                not_acceptable: "Error! Dein Name ist ungültig! Dein Name darf nur deutsche <b>Buchstaben</b> und folgende Zeichen enthalten: Leerzeichen, Punkt, Strich, Apostroph (').<br>Zudem muss jedes Feld mindestens einen Buchstaben enthalten und dein Name darf nicht mehr als 40 Zeichen beinhalten.",
                duplicate: "Error! Dieser Name ist schon in der Datenbank vorhanden! Falls du dich schon einmal angemeldet hast, solltest du dich nicht nochmal anmelden!"
            },

        }
    }
}


// ----------------------------------------------------------------------------
// Read Status-Codes
// ----------------------------------------------------------------------------
if (new URLSearchParams(window.location.search).get('status') === 'error') {
    alert_error.style.display = 'block'

} else if (new URLSearchParams(window.location.search).get('status') === 'not_acceptable') {
    alert_not_acceptable.style.display = 'block'
}
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// From Controls
// ----------------------------------------------------------------------------
async function form_submit(form) {
    form.preventDefault()
    const form_data = new FormData(form)
    const regex_name =  /^([a-z]| |\.|ö|ä|ü|ß|'|-)+$/i
    const forename = form_data.get("forename").trim()
    const surname = form_data.get("surname").trim()

    if (forename.length === 0
        || surname.length === 0
        || (forename.length + surname.length) >= 40
        || !regex_name.test(forename)
        || !regex_name.test(surname)) {
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

    try {
        const res = await add_member(form_body_urlencoded.join('&'))
        console.log(res)

        if (res.status === 200) {
            redirect_success()
        } else if (res.status === 406) {
            redirect_not_acceptable()
        } else {
            redirect_error()
        }
    } catch (err) {
        console.log(err)
        redirect_error()
    }
}
// ----------------------------------------------------------------------------


// ----------------------------------------------------------------------------
// Modal triggers
// ----------------------------------------------------------------------------
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
// ----------------------------------------------------------------------------
</script>

<style scoped>
.form-intro {
    margin: 1em 0;
    text-align: center;
}

.form {
    margin: 30px auto 0;
    width: 400px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.form-submit {
    margin-top: 20px
}

</style>
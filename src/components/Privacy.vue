<template>
    <div class="content">
        <div id="impressum">
            <h3>Impressum</h3>

            <p>Angaben gemäß § 5 TMG</p>
            <p>{{ this.impressum.name }}</p>

            <p><b>Kontakt:</b><br>
                E-Mail: {{ this.impressum.email }}<br>
                Telefon: {{ this.impressum.number }}<br>
            </p>
        </div>

        <div id="privacy">
            <h3>Datenschutzerklärung</h3>

            <p><b>Was passiert mit den Angaben, die ich bei der Anmeldung angebe?</b><br>
                Wenn bei der Anmeldung auf „Bestätigen“ geklickt wird, werden alle hier gemachten Angaben an eine Datenbank auf dem Webserver von Elias Lorenz Schaut in Karlsruhe, Deutschland gesendet und dort spätestens zum Ende des Betreibens dieser Webseite gespeichert.
            </p>

            <p><b>Wer hat Zugriff auf meine Daten und warum?</b><br>
                Zugriff auf alle Angaben hat Elias Lorenz Schaut, Clemens Schaut und die Personen, die sich um die Administration der Daten kümmert.
                Falls der Haken unter "Ich möchte nicht in der öffentlichen Gästeliste gelistet werden" nicht gesetzt wurde, ist der jeweilige Vorname und Nachname in der <router-link to="/guests">öffentlichen Gästeliste</router-link> einsehbar!
                Die Daten aus der Anmeldung werden benötigt, um abschätzen zu können, in welchem Rahmen im Sinne von Anzahl Gäste/Lebensmittel und sonstigen Materialien geplant werden muss.
                Die <router-link to="/guests">öffentlichen Gästeliste</router-link> dient der Übersicht für die Gäste selbst, um besser abschätzen zu können, wer alles kommt.
            </p>

            <p><b>Analytics/Cookies/Externe-Ressourcen u.ä.?</b><br>
                Diese Website selbst verwendet kein analytisches Tracking jeglicher Art.<br>
                Diese Website verwendet Cookies, und zwar ausschließlich "Session Cookies", die die Benutzung der Website effektiver macht. Diese "Session Cookies" werden nach Ende der Browser-Sitzung automatisch gelöscht.<br>
                Personenbezogene Daten werden niemals an Dritte weitergegeben.
            </p>

            <p><b>Was sind meine Rechte?</b><br>
                Nach DSGVO und BDSG kannst du jederzeit Auskunft, Aktualisierung, Sperrung oder Löschung aller deiner Daten von uns verlangen.
                Dein Ansprechpartner hierfür ist der oben genannte Betreiber dieser Webseite. Außerdem bin ich verpflichtet, dich an dein Recht zu erinnern, dieser Zustimmung jederzeit zu widersprechen und dich ggf. bei einer Aufsichtsbehörde über mich zu beschweren.
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Privacy",
    data() {
        return {
            impressum: {
                name: "Elias Lorenz Schaut",
                email: "eschaut@web.de",
                number: "+49 157-51714891",
            }
        }
    }
}
</script>

<style scoped>
    .content {
        margin: 20px;
    }
</style>
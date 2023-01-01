<template>
    <div v-for="detail in details" class="details">
        <h1 class="big" :id="detail.title">{{ detail.title }}</h1>
        <span v-html="detail.value"></span>
    </div>
</template>

<script>
export default {
    name: "Details",
    data() {
        return {
            details: [
                {
                    title: "Eckdaten",
                    value: "<ul><li><b>Datum</b>: 25. Februar 2023</li><li><b>Uhrzeit</b>: Start 16 Uhr für Familie; 19 Uhr für Freunde</li><li><b>Adresse</b>: Buffalo's Country Club Brühl e. V.<br>Weidweg 9, 68782 Brühl</li></ul>"
                },
                {
                    title: "FAQ",
                    value: '<p><b>Q: Welche Corona-Regeln werden gelten?</b><br>A: Kurzgesagt keine! Jedoch sollte man nicht kommen,<br>wenn man Symptome verspürt!<br>Falls die Corona-Regeln sich wieder verschärfen sollten,<br>gibt es diesbezüglich ein Update.</p><p><b>Q: Bis wann sollte ich mich spätestens angemeldet haben?</b><br>A: Gerne so bald wie möglich, spätestens aber bitte 7 Tage vorher (18.02.)!</p><p><b>Q: Die Website gibt mir einen Error bei der Anmeldung bzw.<br>bekommt keine Daten bei der öffentlichen Gästeliste?</b><br>A: Das kann passieren, wenn der Datenbank-Server seine<br>IP-Adresse ändert. Warte einfach eine Viertelstunde,<br>dann sollte es wieder gehen. Falls nicht, schreibe den Betreiber der Website an!</p><p><b>Q: Ich habe mich angemeldet,<br>möchte mich aber wieder abmelden?</b><br>A: Schreibe Clemens mit deinem vollen<br>Namen an. Er kann dich austragen!</p><p><b>Q: Ich habe mich angemeldet,<br>aber mit falschem Namen bzw. Einstellungen?</b><br>A: Schreibe Clemens mit deinem vollen Namen an. Er löscht dich<br>aus der DB und du kannst dich einfach neu anmelden!</p><p><b>Q: Ich habe mich angemeldet,<br>aber ich weiß nicht mehr, welche Haken ich gesetzt habe?</b><br>A: Schreibe Clemens mit deinem vollen Namen an.<br>Er kann dir sagen, was du gesetzt hast!</p><p><b>Q: Was passiert mit meinen Daten?</b><br>A: Lies die <router-link to="/privacy">Datenschutzerklärung</router-link></p><p><b>Q: Werde ich Spaß haben?</b><br>A: JA, du wirst Spaß haben!</p>',
                }
            ]
        }
    }
}
</script>

<style scoped>
.details {
    display: flex;
    width: min(80vw, 600px);
    flex-direction: column;
    justify-content: center;
    margin: 20px auto 20px;
    align-items: center;
    font-size: larger;
}

.red {
    color: red;
}

.blue {
    color: blue;
}
</style>
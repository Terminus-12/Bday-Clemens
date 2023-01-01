<template>
    <div class="content">

        <div class="video" style="display: none">
            <video :src="video" volume="0.5" controls></video>

            <p class="capture big center">
                <b >{{ video_sub }}</b>
            </p>
        </div>

        <p class="capture center huge handwritten"><b>{{ adds_title }}</b></p>

        <div class="adds">
            <div v-for="add in adds" class="add card">
                <img v-if='add.img !== ""' class="card-img-top" :src="add.img" :alt="add.title" width="600">
                <div class="card-body">
                    <p class="card-title capture big"><b>{{ add.title }}</b></p>
                    <p class="card-text" v-html="add.desc"></p>
                </div>
            </div>
        </div>

        <p class="capture center huge handwritten"><b>{{ join_title }}</b></p>

        <div class="arrows">
            <img id="arrow-down" class="arrow" src="/svg/arrow-down-circle-fill.svg" alt="arrow-down">
            <div>
                <img id="arrow-right" class="arrow" src="/svg/arrow-right-circle-fill.svg" alt="arrow-right">
                <router-link class="btn btn-success join_margin" type="button" to="/join">{{ join }}</router-link>
                <img id="arrow-left" class="arrow" src="/svg/arrow-left-circle-fill.svg" alt="arrow-left">
            </div>
            <img id="arrow-up" class="arrow" src="/svg/arrow-up-circle-fill.svg" alt="arrow-up">
        </div>
    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            video: "vid/was_geht.mp4",
            video_sub: "Halte dir die Nacht vom 03. auf den 04. Juni frei!",

            adds_title: "Was erwartet dich?",
            adds: [
            {
              title: "Unwiderstehlichen Westernlandschaft!",
              desc: "Versetzte dich in der nachgebauten Westernstadt die einzigartige Zeit des 'Wilden Westens' zurück!",
              img: "img/.png"
            },
            {
                title: "Karaoke (Ultrastar)",
                desc: "Lass deine Stimmbänder zu epischer Karaoke vibrieren - mit einer Songauswahl von über 5.000 Songs an 4 Mikros bis 1 Uhr!<br>" +
                    "Song Liste: <a href=\"https://schaut.dev/p/ultrastar/\">https://schaut.dev/p/ultrastar/</a>",
                img: "img/.png"
            },
            {
                title: "Deine Wunschmusik!",
                desc: "Reiche vorab deine Musik ein genieße deine Songs auf der Party! " +
                    "Füge dazu Songs der folgenden Youtube-Playlist hinzu: <a href=\"https://www.youtube.com/playlist?list=PLcvH4NFVrtUinn_GklT_iMMBks_6KtgSW&jct=Ef1Tj8sobrkZl6d0CWEDw69MA_9f9Q\" target='_blank'>YouTube</a>",
                img: "img/.png"
            },
            {
                title: "Minigames!",
                desc: "Von Hufeisenwerfen bis zum Baumstamm-Nageln - es gibt viele Minigames für Jedermann auf dem Gelände verteilt!",
                img: "img/.png"
            },
            {
                title: "Lagerfeuer!",
                desc: "Höre bei Dämmerung das Knistern des Holzes bei Lagerfeuerstimmung!",
                img: "img/.png"
            },
            {
                title: "Freigetränke",
                desc: "Genieße eine Auswahl an erfrischenden Getränken völlig frei! Wir haben für jeden Geschmack etwas dabei: Bier, Wein, Sekt, Softdrinks, Wasser, Kaffee, Tee, Limonade, etc.",
                img: "img/.png"
            }],

            join_title: "Registriere dich jetzt!",
            join: "JOIN NOW"
        }
    }
}
</script>

<style scoped>
.video {
    display: flex;
    flex-direction: column;
    width: min(800px, 90vw);
    margin: 30px 0;
    align-self: center;
}

.adds {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: center;
}

.add {
    width: 600px;
    margin: 20px 0;
}
</style>
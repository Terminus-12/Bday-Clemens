
const tmp_path = 'res/tmp/';

function include_html() {
    const divs = document.getElementsByTagName("div")
    console.log(divs)
    for (const div of divs) {
        const attr = div.getAttribute("include-html")
        console.log(attr)
        if (attr) {
            console.log(attr)
            const xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (this.readyState === 4) {
                    if (this.status === 200) {
                        div.innerHTML = this.responseText
                    }
                }
            }
            xhr.open("GET", `${tmp_path}${attr}.html`, true)
            xhr.send()
        }
    }
}

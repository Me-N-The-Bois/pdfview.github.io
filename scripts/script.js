let intro = document.getElementById('todays-subject');
let urlbox = document.getElementById("urlbox");

window.addEventListener('load', (event) => {
    intro.innerHTML = new Date().getDate();
    if (window.location.pathname != "/" && window.location.search == "") {
        window.location = window.location.host + "?" + window.location.pathname
    }
    changeURL(event);
});
document.getElementsByTagName("button")[0].addEventListener('click', (event) => {
    event.preventDefault();
    changeURL(event.target);
});

function changeURL(event) {
    try {
        let url = "";
        if (urlbox.value) {
            url = new URL(urlbox.value);
        } else {
            if (window.location.search === "" || event.type === "submit") {
                document.getElementById("embed")?.remove();
                document.getElementById("url_err") ?? document.getElementsByTagName("header")[0].appendChild(
                    Object.assign(document.createElement("span"), {
                        textContent: "NO URL",
                        id: "url_err",
                    })
                );
                return window.history.pushState({}, "", window.location.href.split("?")[0]);
            } else {
                url = new URL(window.location.search.substring(1) ?? urlbox.value);
                urlbox.value = url.href;
            }
        }

        document.getElementsByTagName("div")[0].append(
            Object.assign(document.createElement("embed"), {
                src: url,
                height: "100%",
                width: "100%",
                id: "embed",
            })
        );
        return document.getElementById("url_err")?.remove();
    } catch (e) {
        console.error(e);
    }
}

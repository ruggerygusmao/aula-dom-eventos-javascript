function upperCase() {
    let paragrafos = document.getElementsByTagName("p");
    for (let i = 0; i < paragrafos.length; i++) {
        document.getElementsByClassName("uper")[i].innerHTML = paragrafos[i].textContent.toLocaleUpperCase();
    }
}

function alteraCor() {
    document.getElementById("titulo").style.color = "red";
}
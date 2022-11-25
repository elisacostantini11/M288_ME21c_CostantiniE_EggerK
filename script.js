let username = document.getElementById("username");

function username(element) {
    var max_chars = 15;

    if (element.value.lengt > max_chars) {
        element.value = element.value.substr(0, max_chars)
    }
}

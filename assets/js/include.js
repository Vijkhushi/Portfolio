document.addEventListener("DOMContentLoaded", function() {
    fetch("header.html")
        .then(response => response.text())
        .then(header => {
            document.querySelector("header").innerHTML = header;
        });

    fetch("footer.html")
        .then(response => response.text())
        .then(footer => {
            document.querySelector("footer").innerHTML = footer;
        });
});
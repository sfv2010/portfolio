// script.js
document.addEventListener("DOMContentLoaded", (event) => {
    // const contactModal = document.getElementById("contactModal");
    // const contactBtn = document.getElementById("contactBtn");
    // const closeBtn = document.getElementsByClassName("close")[0];

    const reloadBtn = document.getElementById("reloadBtn");

    // Handle form submission

    // Handle the confirmation modal button
    reloadBtn.onclick = function () {
        window.location.href = "index.html";
    };
});

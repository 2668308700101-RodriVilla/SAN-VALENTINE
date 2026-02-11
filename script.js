document.addEventListener("DOMContentLoaded", function () {

    function generateLink() {
        const from = document.getElementById("fromInput").value;
        const to = document.getElementById("toInput").value;
        const message = document.getElementById("messageInput").value;

        if (!from || !to || !message) {
            alert("Por favor llena todos los campos 💘");
            return;
        }

        const baseURL = window.location.origin + window.location.pathname;
        const link = baseURL +
            "?from=" + encodeURIComponent(from) +
            "&to=" + encodeURIComponent(to) +
            "&message=" + encodeURIComponent(message);

        document.getElementById("generatedLink").innerHTML =
            "<p>Copia y envía este link:</p>" +
            "<input type='text' value='" + link + "' readonly style='width:80%'>";
    }

    window.generateLink = generateLink;

    const params = new URLSearchParams(window.location.search);
    const from = params.get("from");
    const to = params.get("to");
    const message = params.get("message");

    const formSection = document.getElementById("form-section");
    const envelopeContainer = document.getElementById("envelopeContainer");
    const letterContent = document.getElementById("letter-content");

    if (from && to && message && formSection && envelopeContainer && letterContent) {

        formSection.style.display = "none";
        envelopeContainer.style.display = "flex";

        letterContent.innerHTML =
            "<h2>Para " + to + " 💘</h2>" +
            "<p>" + message + "</p>" +
            "<p class='signature'>Con amor, " + from + "</p>" +
            "<div class='buttons'>" +
            "<button onclick='sayYes()'>Sí 💖</button>" +
            "<button id='noBtn' onmouseover='moveButton()'>No 😅</button>" +
            "</div>";
    }

    window.sayYes = function () {

    document.body.innerHTML =
        "<div class='final-screen'>" +
        "<h1>💞 Sabía que dirías que sí 💞</h1>" +
        "<p>Eres el amor más bonito que me regaló la vida.</p>" +

        "<div class='date-box'>" +
        "<h2>📅 14 de Febrero 2026</h2>" +
        "<p>Prepárate… porque ese día tendremos una cita muy especial ❤️</p>" +
        "</div>" +

        "<div class='big-heart'>❤️</div>" +
        "</div>";
};

    window.moveButton = function () {
        const button = document.getElementById("noBtn");
        if (!button) return;

        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);

        button.style.position = "absolute";
        button.style.left = x + "px";
        button.style.top = y + "px";
    };
    window.openEnvelope = function () {
    const envelope = document.querySelector(".envelope");
    const music = document.getElementById("bgMusic");

    if (envelope) {
        envelope.classList.add("open");
    }

    if (music) {
        music.play().catch(() => {});
    }
};

});





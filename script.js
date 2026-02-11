// Generar link personalizado
function generateLink() {
    const from = document.getElementById("fromInput").value;
    const to = document.getElementById("toInput").value;
    const message = document.getElementById("messageInput").value;

    if (!from || !to || !message) {
        alert("Por favor llena todos los campos 💘");
        return;
    }

    const baseURL = window.location.origin + window.location.pathname;
    const link = ${baseURL}?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&message=${encodeURIComponent(message)};

    document.getElementById("generatedLink").innerHTML =
        `<p>Copia y envía este link:</p>
         <input type="text" value="${link}" readonly style="width:80%">`;
}

// Leer parámetros de la URL
const params = new URLSearchParams(window.location.search);
const from = params.get("from");
const to = params.get("to");
const message = params.get("message");

const formSection = document.getElementById("form-section");
const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letter-content");

// Si hay parámetros → mostrar solo carta
if (from && to && message) {
    formSection.style.display = "none";
    envelope.style.display = "block";

    letterContent.innerHTML = `
        <h2>Para ${to} 💘</h2>
        <p>${message}</p>
        <p class="signature">Con amor, ${from}</p>
        <div class="buttons">
            <button onclick="sayYes()">Sí 💖</button>
            <button id="noBtn" onmouseover="moveButton()">No 😅</button>
        </div>
    `;
}

function sayYes() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1>💞 Sabía que dirías que sí 💞</h1>
            <p>Prepárate para una sorpresa hermosa...</p>
        </div>
    `;
}

function moveButton() {
    const button = document.getElementById("noBtn");
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);

    button.style.position = "absolute";
    button.style.left = x + "px";
    button.style.top = y + "px";
}

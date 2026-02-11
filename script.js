// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const from = params.get("from");
const to = params.get("to");
const message = params.get("message");

// Elementos
const formSection = document.getElementById("form-section");
const envelope = document.getElementById("envelope");
const letterContent = document.getElementById("letter-content");

// Si hay datos en la URL, mostrar solo la carta
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

// Función cuando dice SÍ
function sayYes() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1>💞 Sabía que dirías que sí 💞</h1>
            <p>Prepárate para una sorpresa hermosa...</p>
        </div>
    `;
}

// Botón NO se mueve
function moveButton() {
    const button = document.getElementById("noBtn");
    const x = Math.random() * window.innerWidth - 100;
    const y = Math.random() * window.innerHeight - 50;

    button.style.position = "absolute";
    button.style.left = ${x}px;
    button.style.top = ${y}px;
}

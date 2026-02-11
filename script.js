document.addEventListener("DOMContentLoaded", function () {

  var btn = document.getElementById("createBtn");
  var result = document.getElementById("result");

  btn.onclick = function () {

    var from = document.getElementById("fromName").value;
    var to = document.getElementById("toName").value;
    var message = document.getElementById("message").value;

    if (from === "" || to === "" || message === "") {
      alert("Completa todos los campos 💌");
      return;
    }

    generateCard(from, to, message);
  };

  function generateCard(from, to, message) {

    var baseUrl = window.location.href.split("?")[0];

    var url = baseUrl +
      "?from=" + encodeURIComponent(from) +
      "&to=" + encodeURIComponent(to) +
      "&msg=" + encodeURIComponent(message);

    result.innerHTML =
      "<div class='envelope' id='envelope'>" +
        "<div class='flap'></div>" +
        "<div class='letter'>" +
          "<p>💖 De: <strong>" + from + "</strong></p>" +
          "<p>💘 Para: <strong>" + to + "</strong></p>" +
          "<p style='margin-top:15px;'>💌 " + message + "</p>" +
          "<br><br><h3>¿Quieres ser mi Valentine? 💘</h3>" +
          "<button id='yesBtn'>Sí 💖</button> " +
          "<button id='noBtn'>No 😢</button>" +
          "<br><br><input type='text' id='shareLink' value='" + url + "' readonly>" +
          "<br><br><button id='copyBtn'>📋 Copiar enlace</button>" +
        "</div>" +
      "</div>";

    // Abrir sobre
    document.getElementById("envelope").onclick = function () {
      this.classList.toggle("open");

      var music = document.getElementById("bgMusic");
      music.play();
    };

    // Botón copiar
    document.getElementById("copyBtn").onclick = function () {
      var input = document.getElementById("shareLink");
      input.select();
      document.execCommand("copy");
      alert("Enlace copiado 💕");
    };

    // Botón Sí
    document.getElementById("yesBtn").onclick = function () {
      result.innerHTML =
        "<h2>💖 ¡Sabía que dirías que sí! 💖</h2>" +
        "<p>Ahora oficialmente somos Valentines 💘</p>";
    };

    // Botón No
    document.getElementById("noBtn").onmouseover = function () {
      this.style.position = "absolute";
      this.style.left = Math.random() * 80 + "vw";
      this.style.top = Math.random() * 80 + "vh";
    };
  }

  // Si entra desde link
  var params = new URLSearchParams(window.location.search);
  var from = params.get("from");
  var to = params.get("to");
  var msg = params.get("msg");

  if (from && to && msg) {
    generateCard(from, to, msg);
  }

});

function createHeart() {
  var heart = document.createElement("div");
  heart.className = "heart";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";

  document.body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 6000);
}

// Crear corazones cada cierto tiempo
setInterval(createHeart, 700);
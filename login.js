const form = document.getElementById("loginForm");
const msg = document.getElementById("loginMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();

  if (user === "admin" && pass === "1234") {
    localStorage.setItem("usuarioLogado", user);
    window.location.href = "index.html";
  } else {
    msg.textContent = "Usuário ou senha incorretos!";
  }
});
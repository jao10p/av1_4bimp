const usuarioLogado = localStorage.getItem("usuarioLogado");
if (!usuarioLogado) window.location.href = "login.html";

const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  window.location.href = "login.html";
});

const musicasPop = [
  { titulo: "Blinding Lights", artista: "The Weeknd", capaUrl: "https://i.scdn.co/image/ab67616d0000b2737e6d19a1d7ab8b1e33f6c9c1" },
  { titulo: "Levitating", artista: "Dua Lipa", capaUrl: "https://i.scdn.co/image/ab67616d0000b27321ff3b8f43a30f8cfac57a3b" },
  { titulo: "Stay", artista: "The Kid LAROI & Justin Bieber", capaUrl: "https://i.scdn.co/image/ab67616d0000b273f98e3d73d6e4c5f5f9b3fefd" },
  { titulo: "Dance Monkey", artista: "Tones and I", capaUrl: "https://i.scdn.co/image/ab67616d0000b2732a9d9eb7cf8dc5ffdf09aee8" },
  { titulo: "As It Was", artista: "Harry Styles", capaUrl: "https://i.scdn.co/image/ab67616d0000b27359b3917fba9e0b0a82f54095" },
  { titulo: "Peaches", artista: "Justin Bieber", capaUrl: "https://i.scdn.co/image/ab67616d0000b27301bb87fce484fa6a3f7a1b1f" },
];

const lancamentos = [
  { titulo: "Houdini", artista: "Eminem", capaUrl: "https://i.scdn.co/image/ab67616d0000b2732d6f6b5ab57a68f674d7e67d" },
  { titulo: "Espresso", artista: "Sabrina Carpenter", capaUrl: "https://i.scdn.co/image/ab67616d0000b27315f4b6e5e8f36f5c6b3df4d0" },
  { titulo: "I Had Some Help", artista: "Post Malone ft. Morgan Wallen", capaUrl: "https://i.scdn.co/image/ab67616d0000b27373eebd34452b9db15e3a2e3c" },
  { titulo: "Paint The Town Red", artista: "Doja Cat", capaUrl: "https://i.scdn.co/image/ab67616d0000b273e3a546e0d4580edfe1b99b2f" },
];

const listaPop = document.getElementById("lista-de-musicas");
const listaLanc = document.getElementById("lista-lancamentos");
const tocandoAgora = document.getElementById("tocando-agora");
const playPauseBtn = document.getElementById("playPauseBtn");
let tocando = false;

function renderizar(lista, dados) {
  lista.innerHTML = "";
  dados.forEach((m) => {
    const card = document.createElement("div");
    card.classList.add("musica-card");
    card.innerHTML = `
      <img src="${m.capaUrl}" alt="${m.titulo}">
      <h3>${m.titulo}</h3>
      <p>${m.artista}</p>
    `;
    card.addEventListener("click", () => tocar(m));
    lista.appendChild(card);
  });
}

function tocar(m) {
  tocandoAgora.textContent = `🎶 Tocando agora: ${m.titulo} - ${m.artista}`;
  tocando = true;
  playPauseBtn.textContent = "⏸️";
}

playPauseBtn.addEventListener("click", () => {
  tocando = !tocando;
  playPauseBtn.textContent = tocando ? "⏸️" : "▶️";
});

renderizar(listaPop, musicasPop);
renderizar(listaLanc, lancamentos);
// Dados de músicas com capa e artista
const musicas = {
  pop: [
    { titulo: "As It Was", artista: "Harry Styles", capaUrl: "https://i.scdn.co/image/ab67616d0000b27359b3917fba9e0b0a82f54095" },
    { titulo: "Levitating", artista: "Dua Lipa", capaUrl: "https://i.scdn.co/image/ab67616d0000b27321ff3b8f43a30f8cfac57a3b" },
    { titulo: "Blinding Lights", artista: "The Weeknd", capaUrl: "https://i.scdn.co/image/ab67616d0000b2737e6d19a1d7ab8b1e33f6c9c1" },
    { titulo: "Anti-Hero", artista: "Taylor Swift", capaUrl: "https://i.scdn.co/image/ab67616d0000b2738a0b8d29d92f5922a3c581fc" },
  ],
  rock: [
    { titulo: "Bohemian Rhapsody", artista: "Queen", capaUrl: "https://i.scdn.co/image/ab67616d0000b273b5db9b6b9bbefb5e9d3e7cfa" },
    { titulo: "Smells Like Teen Spirit", artista: "Nirvana", capaUrl: "https://i.scdn.co/image/ab67616d0000b2731d5f6b2d4f6172a42e4c96cd" },
    { titulo: "Sweet Child O' Mine", artista: "Guns N' Roses", capaUrl: "https://i.scdn.co/image/ab67616d0000b2735e8dbde2c5ec6f7a5f60a7b2" },
  ],
  rap: [
    { titulo: "God's Plan", artista: "Drake", capaUrl: "https://i.scdn.co/image/ab67616d0000b273b8e02b34dff580d54d6d1c4" },
    { titulo: "Lose Yourself", artista: "Eminem", capaUrl: "https://i.scdn.co/image/ab67616d0000b2731d057bfc3277f09c17347a8d" },
    { titulo: "SICKO MODE", artista: "Travis Scott", capaUrl: "https://i.scdn.co/image/ab67616d0000b2730cf2f6b5abf41c3c2b4b05f3" },
  ],
  eletronica: [
    { titulo: "Titanium", artista: "David Guetta ft. Sia", capaUrl: "https://i.scdn.co/image/ab67616d0000b2735e27d3b2785fefae5a1ef391" },
    { titulo: "Animals", artista: "Martin Garrix", capaUrl: "https://i.scdn.co/image/ab67616d0000b27306a8de2fbf8a41e8e01aab4c" },
    { titulo: "Lean On", artista: "Major Lazer", capaUrl: "https://i.scdn.co/image/ab67616d0000b273d04d0b8f3285d8b3f76b9d0a" },
  ]
};

const tocandoAgora = document.getElementById("tocando-agora");
const playPauseBtn = document.getElementById("playPauseBtn");

let tocando = false;

// Renderiza os cards
function renderizarMusicas(categoria, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  musicas[categoria].forEach(m => {
    const card = document.createElement("div");
    card.classList.add("musica-card");
    card.innerHTML = `
      <img src="${m.capaUrl}" alt="${m.titulo}">
      <h3>${m.titulo}</h3>
      <p>${m.artista}</p>
    `;
    card.addEventListener("click", () => tocarMusica(m));
    container.appendChild(card);
  });
}

function tocarMusica(m) {
  tocandoAgora.textContent = `🎶 Tocando agora: ${m.titulo} - ${m.artista}`;
  tocando = true;
  playPauseBtn.textContent = "⏸️";
}

playPauseBtn.addEventListener("click", () => {
  tocando = !tocando;
  playPauseBtn.textContent = tocando ? "⏸️" : "▶️";
});

renderizarMusicas("pop", "pop-grid");
renderizarMusicas("rock", "rock-grid");
renderizarMusicas("rap", "rap-grid");
renderizarMusicas("eletronica", "eletronica-grid");

// Troca de abas
const tabs = document.querySelectorAll(".tab");
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");

    document.querySelector(".musica-section.active").classList.remove("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
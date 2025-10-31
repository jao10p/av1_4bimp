const musicas = [
  {
    titulo: "Shape of You",
    artista: "Ed Sheeran",
    capaUrl: "https://i.scdn.co/image/ab67616d0000b2739b8e02b34dff580d54d6d1c4"
  },
  {
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    capaUrl: "https://i.scdn.co/image/ab67616d0000b2737e6d19a1d7ab8b1e33f6c9c1"
  },
  {
    titulo: "Levitating",
    artista: "Dua Lipa",
    capaUrl: "https://i.scdn.co/image/ab67616d0000b27321ff3b8f43a30f8cfac57a3b"
  }
];

function renderizarMusicas() {
  const lista = document.getElementById("lista-de-musicas");
  lista.innerHTML = ""; // limpa conteúdo anterior
  musicas.forEach(m => {
    const card = document.createElement("div");
    card.classList.add("musica-card");
    card.innerHTML = `
      <img src="${m.capaUrl}" alt="${m.titulo}">
      <h3>${m.titulo}</h3>
      <p>${m.artista}</p>
    `;
    lista.appendChild(card);
  });
}

renderizarMusicas();
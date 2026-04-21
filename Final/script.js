const albums = document.querySelectorAll(".album");
const body = document.body;

albums.forEach((album) => {
  album.addEventListener("mouseenter", () => {
    const color = album.dataset.color;
    body.style.boxShadow = `inset 0 0 220px ${color}55`;
  });

  album.addEventListener("mouseleave", () => {
    body.style.boxShadow = "none";
  });
});
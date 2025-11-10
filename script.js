const elementos = document.querySelectorAll("[data-animar]");

function animarScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  elementos.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add("visible");
    else el.classList.remove("visible");
  });
}
window.addEventListener("scroll", animarScroll);
animarScroll();

/* Modal de imagen */
const modal = document.getElementById("modal");
const imagenModal = document.getElementById("imagenModal");
const captionText = document.getElementById("caption");
const cerrar = document.getElementsByClassName("cerrar")[0];

document.querySelectorAll(".producto img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "block";
    imagenModal.src = img.src;
    captionText.innerHTML = img.alt;
  });
});

cerrar.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

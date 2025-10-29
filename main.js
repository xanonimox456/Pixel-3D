function toggleCategorias() {
  const menu = document.getElementById("menu-categorias");
  menu.classList.toggle("show");
}

// Cerrar el menú si se hace clic fuera
window.addEventListener("click", function(e) {
  const menu = document.getElementById("menu-categorias");
  const boton = document.querySelector("button[onclick='toggleCategorias()']");
  
  if (!menu.contains(e.target) && e.target !== boton) {
    menu.classList.remove("show");
  }
});

// 🔍 BÚSQUEDA AVANZADA
document.getElementById("busquedaInput").addEventListener("keyup", function() {
  const filtro = this.value.toLowerCase().trim();
  const items = document.querySelectorAll(".catalogo-item");

  items.forEach(item => {
    const nombre = item.querySelector("h3").textContent.toLowerCase();
    const categoria = item.dataset.categoria.toLowerCase();
    const descripcion = item.textContent.toLowerCase();

    // 🔹 Si el texto coincide con nombre, categoría o descripción → mostrar
    if (
      nombre.includes(filtro) ||
      categoria.includes(filtro) ||
      descripcion.includes(filtro)
    ) {
      item.style.display = "block";
      item.style.animation = "aparecer 0.3s ease";
    } else {
      item.style.display = "none";
    }
  });
});


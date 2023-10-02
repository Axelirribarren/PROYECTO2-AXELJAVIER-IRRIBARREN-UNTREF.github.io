document.addEventListener("DOMContentLoaded", () => {
  const detalleProducto = document.getElementById("gallery_container");

  const urlParams = new URLSearchParams(window.location.search);
  const idProduct = urlParams.get("id");
  

  const productoSeleccionado = JSON.parse(localStorage.getItem("productoSeleccionado"));

  if (productoSeleccionado) {
    const contenedorDetallesProductos = document.createElement("div");
    contenedorDetallesProductos.classList.add("detalles-productos");
    
    contenedorDetallesProductos.innerHTML =  `
      <article class="gallery">

                <div class="gallery_side" id="gallerySide">
                    <img class="next" src="imagenes/iconos/next.svg" alt="siguiente">
                    <img class="previous" src="imagenes/iconos/previous.svg" alt="anterior">
                </div>
            </article>

            <article class="product">
                <h1 class="company">Zedier Phones</h1>
                <h2 class="product_title">${productoSeleccionado.marca}</h2>
                <h3 id="product_name">${productoSeleccionado.titulo}</h3>
                <p class="product_descriptions">${productoSeleccionado.descripcion} <span>Más info.</span></p>

                <div class="prices">
                    <p class="product_price">${productoSeleccionado.oferta} <span class="product_discount">${productoSeleccionado.descuento}</span></p>
                    <p class="product_before">${productoSeleccionado.precio}</p>
                </div>

                <div class="product_quantity">
                    <div class="input">
                        <img class="minus" src="imagenes/iconos/minus.svg" alt="menos">
                        <input class="input_number" type="text" value="0">
                        <img class="plus" src="imagenes/iconos/plus.svg" alt="más">
                    </div>
                    <button class="product_add">Añadir al Carrito</button>
                </div>
            </article>`;

    detalleProducto.appendChild(contenedorDetallesProductos);

    const gallerySide = document.getElementById("gallerySide");
    gallerySide.style.backgroundImage = `url(${productoSeleccionado.img1})`
  }
});

document.addEventListener("DOMContentLoaded", function () {
    const productosDiv = document.getElementById("products");
  
    const url = "javascript/mobiles.json";
  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
  
        data.productos.forEach((producto) => {

          const productoDiv = document.createElement("div");
          productoDiv.classList.add("producto");
  

          productoDiv.innerHTML = `
            <h2 class="marca">${producto.marca}</h2>
            <h3 class="title_producto">${producto.titulo}</h3>
            <img id="img_products" src="${producto.img1}" alt="${producto.marca} ${producto.titulo}">
            <p class="precio_producto">${producto.precio}</p>
          `;
  
          productoDiv.addEventListener("click", () => {

            localStorage.setItem("productoSeleccionado", JSON.stringify(producto));
            mostrarDetallesProductos(producto.id);
          });
  

          productosDiv.appendChild(productoDiv);
        });
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });
  });
  
  function mostrarDetallesProductos(idProducto) {

    window.location.href = `producto.html?id=${idProducto}`;
  }
  
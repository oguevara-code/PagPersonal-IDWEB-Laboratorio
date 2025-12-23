let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

const carritoContainer = document.getElementById('carrito-items');
const totalEl = document.getElementById('total');

function precioANumero(precioStr) {
    return parseFloat(precioStr.replace("S/", "").replace(",", "").trim());
}

function mostrarCarrito() {
    carritoContainer.innerHTML = '';
    let total = 0;

    carrito.forEach((prod, index) => {
        total += precioANumero(prod.precio);

        const div = document.createElement('div');
        div.classList.add('carrito-producto');
        div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}">
            <h3>${prod.nombre}</h3>
            <p class="precio">${prod.precio}</p>
            <button class="btn-eliminar" onclick="eliminarProducto(${index})">Eliminar</button>
        `;
        carritoContainer.appendChild(div);
    });

    totalEl.textContent = "S/" + total.toLocaleString();
}

function eliminarProducto(index) {
    carrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    mostrarCarrito();
}

mostrarCarrito();
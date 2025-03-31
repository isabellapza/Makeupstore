// Seleccionamos todos los botones de "Agregar al carrito"
const bottom = document.querySelectorAll('.add-btn');

// Función que se ejecuta cuando se hace clic en el botón
bottom.forEach(bottom => {
    bottom.addEventListener('click', () => {
        alert('Product added to cart');
    });
});

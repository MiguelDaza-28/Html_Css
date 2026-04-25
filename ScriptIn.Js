// Función para cambiar lo que pasa al darle click al botón de envío
const formulario = document.getElementById('formulario-contacto');
const botonEnviar = document.getElementById('btn-enviar');

formulario.addEventListener('submit', function(event) {
    // Evitamos que el formulario refresque la página (solo para ver el efecto)
    event.preventDefault();

    // Cambiamos el texto y el estilo
    botonEnviar.innerText = "¡Enviado!";
    botonEnviar.style.backgroundColor = "#28b563"; // Cambia a verde
    botonEnviar.style.color = "white";
    
    // Opcional: Desactivar el botón para que no lo presionen dos veces
    botonEnviar.disabled = true;

    // Mensaje en consola para confirmar
    console.log("Formulario enviado con éxito");
});

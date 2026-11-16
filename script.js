const botones = document.querySelectorAll(".menu button");
const secciones = document.querySelectorAll(".seccion");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const destino = boton.dataset.seccion;

        botones.forEach(b => {
            b.classList.remove("activo");
        });

        secciones.forEach(seccion => {
            seccion.classList.remove("activa");
        });

        boton.classList.add("activo");

        document.getElementById(destino).classList.add("activa");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

});

const formulario = document.getElementById("formularioOpinion");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const tema = document.getElementById("tema").value;

    const mensaje = document.getElementById("mensaje");

    mensaje.textContent =
        "¡Gracias, " + nombre +
        "! Tu opinión sobre " + tema +
        " fue enviada correctamente.";

    formulario.reset();

});
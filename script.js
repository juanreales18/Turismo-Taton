let currentSlide = 0;
const slides = document.querySelectorAll('.header-slider .slide');

function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

setInterval(nextSlide, 5000);





// Selecciona todos los carruseles
const carruseles = document.querySelectorAll('.carrusel');

carruseles.forEach((carrusel, index) => {
    let indice = 0; // Índice de la imagen activa para este carrusel
    const imagenes = carrusel.querySelectorAll('.imagen'); // Imágenes del carrusel actual
    const botonesPrev = carrusel.querySelector('.prev');
    const botonesNext = carrusel.querySelector('.next');

    function mostrarImagen() {
        // Oculta todas las imágenes
        imagenes.forEach((img, i) => {
            img.classList.remove('activa');
            if (i === indice) {
                img.classList.add('activa'); // Muestra la imagen activa
            }
        });
    }

    function cambiarImagen(direccion) {
        indice += direccion; // Cambia el índice según la dirección
        if (indice < 0) {
            indice = imagenes.length - 1; // Regresa a la última imagen si está en la primera
        } else if (indice >= imagenes.length) {
            indice = 0; // Regresa a la primera imagen si está en la última
        }
        mostrarImagen();
    }

    // Asocia eventos a los botones
    botonesPrev.addEventListener('click', () => cambiarImagen(-1));
    botonesNext.addEventListener('click', () => cambiarImagen(1));

    // Inicializa mostrando la primera imagen
    mostrarImagen();
});


    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 700) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
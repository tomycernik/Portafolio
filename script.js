// Obtener enlaces del menú y secciones
const links = document.querySelectorAll('.sidebar ul li a');
const sections = document.querySelectorAll('.section');

// Función para actualizar el menú activo al hacer scroll
function updateActiveLink() {
    let currentSection = null;

    // Identificar la sección actualmente visible
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute("id");
        }
    });

    // Actualizar las clases activas en el menú
    links.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active");
        }
    });
}

// Función para el scroll suave al hacer clic en un enlace
links.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});

// Escuchar eventos de scroll para actualizar el menú activo
window.addEventListener("scroll", updateActiveLink);

// Esperamos a que se cargue el DOM
document.addEventListener('DOMContentLoaded', () => {
    const content = document.querySelector('.content');
    const links = document.querySelectorAll('.sidebar ul li a');
    const sections = document.querySelectorAll('.section');
    const threshold = 150; // Umbral en pixeles para determinar la sección activa
  
    function updateActiveLink() {
      let currentId = "";
  
      // Obtenemos el scroll actual del contenedor '.content'
      const scrollTop = content.scrollTop;
  
      sections.forEach(section => {
        // offsetTop de la sección (relativo al contenedor)
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        // Si scrollTop está dentro de la sección (ajustando con el threshold)
        if (scrollTop >= sectionTop - threshold &&
            scrollTop < sectionTop + sectionHeight - threshold) {
          currentId = section.getAttribute('id');
        }
      });
  
      // Actualizamos los enlaces del menú según el id encontrado
      links.forEach(link => {
        if (link.getAttribute('href') === '#' + currentId) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    }
  
    // Attach the scroll event to the .content container
    content.addEventListener('scroll', updateActiveLink);
    
    // Actualizamos una vez al cargar la página
    updateActiveLink();
  });
  
const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuToggle.classList.toggle("open");
});





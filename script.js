const carouselInner = document.getElementById("carouselInner");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const navLinks = document.querySelectorAll(".nav-link");

let currentIndex = 0;
const projects = document.querySelectorAll(".project");
const totalProjects = projects.length;

// CARROSSEL INFINITO
function updateCarousel() {
  const projectWidth = projects[0].offsetWidth + 15;
  carouselInner.style.transform = `translateX(-${currentIndex * projectWidth}px)`;
}

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalProjects) % totalProjects;
  updateCarousel();
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalProjects;
  updateCarousel();
});

// MENU ATIVO AO ROLAR
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 100;
  navLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute("href"));
    if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    }
  });
});

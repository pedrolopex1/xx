document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
          navMenu.classList.toggle('active');
      });
  }

  function rotateTestimonials() {
      const cards = document.querySelectorAll('.section__card');
      if (cards.length === 0) return;

      let currentIndex = 0;

      setInterval(() => {
          if (!cards[currentIndex]) return;

          cards[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % cards.length;
          cards[currentIndex].classList.add('active');
      }, 3000);
  }

  rotateTestimonials();

  let currentIndex = 0;
  const slides = document.querySelectorAll('.numeros .carrossel .slide');
  const carrossel = document.querySelector('.numeros .carrossel');

  if (slides.length > 0 && carrossel) {
      const totalSlides = slides.length;

      function changeSlide() {
          currentIndex = (currentIndex + 1) % totalSlides;
          carrossel.style.transition = 'transform 1s ease';
          carrossel.style.transform = `translateX(${-100 * currentIndex}%)`;
      }

      setInterval(changeSlide, 3000);
  }
});
var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});



document.addEventListener("DOMContentLoaded", function() {
  const navbarLinks = document.querySelectorAll('.navbar a');

  function checkSectionInView() {
      let scrollPosition = window.scrollY + 200;

      navbarLinks.forEach(link => {
          const sectionId = link.getAttribute('href').substring(1);
          const section = document.getElementById(sectionId);

          if (section) {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.clientHeight;

              if (scrollPosition >= sectionTop && scrollPosition < (sectionTop + sectionHeight)) {
                  navbarLinks.forEach(link => link.classList.remove('active'));
                  link.classList.add('active');
              }
          }
      });

      const pageHeight = document.body.clientHeight;
      const windowHeight = window.innerHeight;
      if (scrollPosition >= pageHeight - windowHeight) {
          navbarLinks.forEach(link => link.classList.remove('active'));
          document.querySelector('.navbar a[href="#contact"]').classList.add('active');
      }
  }

  window.addEventListener('load', checkSectionInView);
  window.addEventListener('scroll', checkSectionInView);
});






const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const sunIcon = document.querySelector('.bxs-sun');
const moonIcon = document.querySelector('.bxs-moon');

themeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    // Atualizar ícones com base no tema atual
    const isDarkMode = body.classList.contains('dark-theme');
    if (isDarkMode) {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }
    
    // Salvar preferência do usuário no localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Verificar o tema preferido do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-theme');
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    } else {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    }
});




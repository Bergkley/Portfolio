// ANIMAÇÃO DE DIGITAÇÃO
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

// ATIVAÇÃO DO MENU DE NAVEGACAO

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




// TOGGLE

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
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

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





// Seleciona os botões de filtro
const filterButtons = document.querySelectorAll('.filter-btn');
// Seleciona a lista de skills
const skillsList = document.querySelector('.skills-list');

// Adiciona evento de clique para cada botão de filtro
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        // Mostra todos os skills
        if (filterValue === 'all') {
            document.querySelectorAll('.skill').forEach(skill => {
                skill.style.display = 'block';
            });
        } else {
            // Esconde todos os skills e mostra apenas os que correspondem ao filtro
            document.querySelectorAll('.skill').forEach(skill => {
                skill.style.display = 'none';
            });
            document.querySelectorAll(`.skill[data-category="${filterValue}"]`).forEach(skill => {
                skill.style.display = 'block';
            });
        }
    });
});





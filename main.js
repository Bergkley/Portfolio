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





// filtro do botão
const filterButtons = document.querySelectorAll('.filter-btn');
const skillsList = document.querySelector('.skills-list');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filterValue = button.getAttribute('data-filter');

        if (filterValue === 'all') {
            document.querySelectorAll('.skill').forEach(skill => {
                skill.style.display = 'block';
            });
        } else {
            document.querySelectorAll('.skill').forEach(skill => {
                skill.style.display = 'none';
            });
            document.querySelectorAll(`.skill[data-category="${filterValue}"]`).forEach(skill => {
                skill.style.display = 'block';
            });
        }
    });
});

const filterButton = document.querySelectorAll('.filter-btn');

filterButton.forEach(button => {
    button.addEventListener('click', function() {
        filterButton.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});


// MODAL


document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.show-details-btn');
    const modals = document.querySelectorAll('.modal');
    const closeButton = document.querySelectorAll('.close');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            modals[index].style.display = 'block';
        });
    });

    closeButton.forEach((button) => {
        button.addEventListener('click', () => {
            modals.forEach((modal) => {
                modal.style.display = 'none';
            });
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});


// FILTRO DO PROJETOS

document.addEventListener("DOMContentLoaded", function() {
    function handleFilterButtonClick(buttonsClass, cardsClass, defaultFilter) {
        const filterButtons = document.querySelectorAll(buttonsClass);
        const cards = document.querySelectorAll(cardsClass);

        filterButtons.forEach(button => {
            button.addEventListener("click", function() {
                const filter = this.getAttribute("data-filter");

                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove("active"));
                // Add active class to clicked button
                this.classList.add("active");

                cards.forEach(card => {
                    if (filter === "all" || card.getAttribute("data-category") === filter) {
                        card.style.display = "block";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });

        document.querySelector(buttonsClass + `[data-filter='${defaultFilter}']`).click();
    }

    handleFilterButtonClick(".portfolio-filter-btn", ".portfolio-content .card", "all");

    handleFilterButtonClick(".skills-filter-btn", ".skills-content .skill", "all");
});







// Menu link
const menuLinks = document.querySelectorAll('.navbar-mobile a, .navbar-logo, .botao-seta a, .botao-flutuante a');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 30;
  smoothScrollTo(0, distanceFromTheTop);
}

menuLinks.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.scrollX;
  const startY = window.scrollY || window.scrollY;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== "undefined" ? duration : 500;

  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1)
      return (distance / 2) * time * time * time * time + from;
    return (-distance / 2) * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60);
}

// Menu Scroll
function scrolled() {
  const navBar = document.querySelector('.navbar');
  const botaoFlutuante = document.querySelector('.botao-flutuante');
  const scroll = window.scrollY;

  if (scroll >= 50) {
    navBar.classList.add("scrolled");
    botaoFlutuante.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
    botaoFlutuante.classList.remove("scrolled");
  }
};

window.addEventListener('scroll', scrolled);

// Menu mobile
const navbarHamburger = document.querySelector('.navbar-hamburger');

function handleNavbarHamburger() {
  const navbarMobile = document.querySelector('.navbar-mobile');
  navbarMobile.classList.toggle('translate');
  navbarMobile.classList.toggle('shadow');
};

navbarHamburger.addEventListener('click', handleNavbarHamburger);

const navbarHamburgerLink = document.querySelectorAll('.navbar-mobile a');

function handleNavbarHamburgerLink() {
  const navbarMobileLink = document.querySelector('.navbar-mobile a');
  navbarMobile.classList.remove('translate');
};

navbarHamburgerLink.forEach((link) => {
  link.addEventListener('click', handleNavbarHamburger);
});


// Sections
const sections = document.querySelectorAll('section');

// Função para atualizar o estado ativo do menu
function setActiveMenuItem(section) {
  menuLinks.forEach(item => {
    item.classList.remove('ativo');
  });

  const targetMenuItem = document.querySelector(`nav ul li a[href="#${section.id}"]`);
  targetMenuItem.classList.add('ativo');
}

// Função para verificar qual seção está visível na tela
function getCurrentSection() {
  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      return section;
    }
  }
  return null;
}

// Função de controle de rolagem
function scrollHandler() {
  const currentSection = getCurrentSection();
  if (currentSection) {
    setActiveMenuItem(currentSection);
  }
}

// Adiciona um ouvinte de evento de rolagem
window.addEventListener('scroll', scrollHandler);

const initAnimationScroll = () => {
  const sections = document.querySelectorAll('.js-scroll')

  const windowHalfSize = window.innerHeight * 0.6

  const animateScroll = () => {
    sections.forEach(item => {
      const sectionTop = item.getBoundingClientRect().top
      const isSectionVisible = (sectionTop - windowHalfSize) < 0

      if (isSectionVisible) {
        item.classList.add('ativo')
      } 
    })
  }
  animateScroll()
  window.addEventListener('scroll', animateScroll);
}

initAnimationScroll();

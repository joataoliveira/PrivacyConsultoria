const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

const header = document.querySelector('#header')
const navHeight = header.offsetHeight

const links = document.querySelectorAll('nav ul li a')

const backToTopButton = document.querySelector('.back-to-top')

/* funcao para mudar o header quando rolar o scroll da pagina*/
function changeHeaderWhenScroll() {
  if (this.window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* funcao para Botao voltar para o topo */
function upTheButton() {
  if (this.window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}
/* Mostrar o navigation quando clicar no botao do menu */

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}
/* fechar menu quando clicar em alguma opcao */

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* testimonials swiper */

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

/* Scroll reveal: mostrar elementos quando der scroll na pagina */

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `
  #home .text, #home .image,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .text, footer .social-media
`,
  { interval: 100 }
)

/* menu ativo conforme a secao na pagina */
const sections = document.querySelectorAll('main section[id]')

function activateMenuAtCurrentSection() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const limitStart = checkpoint >= sectionTop
    const limitEnd = checkpoint <= sectionTop + sectionHeight

    if (limitStart && limitEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

/* Listener do scroll da pagina */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  upTheButton()
  activateMenuAtCurrentSection()
})

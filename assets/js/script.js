// ==================== SHOW MENU ====================
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// ==================== MENU SHOWN ====================
// validate if constant exists
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ==================== MENU HIDDEN ====================
// validate if constant exists
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ==================== REMOVE MENU MOBILE ====================
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    // when click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ==================== SHADOW HEADER ====================
const shadowHeader = () => {
    const header = document.getElementById('header')
    // when the scroll is grater than 50 viewport height, add the shadow-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header') 
                       : header.classList.remove('shadow-header')
}

window.addEventListener('scroll', shadowHeader)

// ==================== EMAIL JS ====================
const contactForm = document.getElementById('contact-form'), 
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_jnxfv8u','template_xyx1op7','#contact-form','vTBMA8eGLZonlxIAE')

    .then(() => {
        // show sent message
        contactMessage.textContent = '✅ Message sent successfully!'

        // remove message after 5 seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // clear input fields
        contactForm.reset()
    }, () => {
        // show error message
        contactMessage.textContent = '❌ Message not sent! (SERVICE ERROR)'
    })
}

contactForm.addEventListener('submit', sendEmail)

// ==================== SHOW SCROLL UP ====================
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport innerHeight, add the show-scroll class to the a tag with the scroll__up class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') 
                        : scrollUp.classList.remove('show-scroll') 
}

window.addEventListener('scroll', scrollUp)

// ==================== SCROLL SECTIONS - ACTIVE LINK ====================
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)

// ==================== TOGGLE DARK & LIGHT THEME ====================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// validate if the user previously close a topic
if(selectedTheme) {
    // if the validation is fulfilled, ask what the issue was to know if we activated or deactivated the dark theme
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save the theme and the current icon that the user chose manually
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

//==================== SCROLL REVEAL ANIMATION =====================
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true // animation repeat
})

sr.reveal(`.home__perfil, .about__image, .contact__mail`, {origin: 'right'})
sr.reveal(`.home__name, .home__info, .about__container .section__title-1, .about__info, .contact__social, .contact__data`, {origin: 'left'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})
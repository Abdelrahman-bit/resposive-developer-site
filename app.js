const mobileMenu = document.querySelector('.nav__navigation-list ');
const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.nav__container');
const humbSpans = document.querySelectorAll('.menu-toggle span');

document.addEventListener('click', (e) => {
    // handle show the menu toggle
    if(e.target == menuToggle || [...menuToggle.children].includes(e.target)){
        if(menuToggle.classList.contains('active')){
            mobileMenu.style.top = '-520%';
            menuToggle.classList.remove('active');
        }else{
            mobileMenu.style.top = '101%';
            menuToggle.classList.add('active');
        }
    }else{
        setTimeout(function(){
            mobileMenu.style.top = '-520%';
            menuToggle.classList.remove('active');
        }, 200)
    }

    // handle add active class to the lists
    if(e.target.classList.contains('nav__list')){
        document.querySelectorAll('.nav__list').forEach((element) => {
            element.classList.remove('active');
        });
        e.target.classList.add('active');

        // make the nav list response for click, move to the right section 
        if(e.target.id == 'home'){
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }else if(e.target.id == 'services'){
           const serveceSection =  document.querySelector(".services");
           window.scrollTo({ top: serveceSection.offsetTop-70, behavior: 'smooth' });
        }else if(e.target.id == 'portfolio'){
           const portfolioSection =  document.querySelector(".portfolio");
           window.scrollTo({ top: portfolioSection.offsetTop-70, behavior: 'smooth' });
        }else if(e.target.id == 'contact'){
           const contactSection =  document.querySelector("footer");
           window.scrollTo({ top: contactSection.offsetTop-70, behavior: 'smooth' });
        }
    }
});

// click on the logo to go home
const btn = document.querySelector('.nav__logo');
btn.addEventListener('click', () => {
    console.log('heloo')
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


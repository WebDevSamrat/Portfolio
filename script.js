const navMenu = document.getElementById("nav-menu"),
      navTrigger = document.getElementById("nav-trigger");


/*===Menu Show===*/

if(navTrigger){
    navTrigger.addEventListener('click', () => {
        navTrigger.classList.toggle('nav-open');
        navMenu.classList.toggle('show-menu');
        document.body.classList.toggle('overflow-hidden')
    })
}

/*===== MENU HIDDEN =====*/


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    // when we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
    navTrigger.classList.remove('nav-open')
    document.body.classList.remove('overflow-hidden');
}

navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND NAV ===============*/
function scrollNav()
{
    const nav = document.getElementById("nav")
    //when the scroll is greater than 80 viewport height, addthe scroll -header class to the header tag
    if(this.scrollY >= 80) nav.classList.add("scroll-nav"); else nav.classList.remove("scroll-nav")
}
window.addEventListener("scroll" , scrollNav)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")
function scrollActive()
{
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute("id")
              if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
              {
                  document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
              }
              else
              {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
              }
    })
}
window.addEventListener("scroll", scrollActive)

/*=============== Model IMG MOVE ON HOVER ===============*/

const heroImg = document.getElementById('hero-img');

heroImg.onmouseover = () => {
    heroImg.classList.add('hero-img-hover')
}

heroImg.onmouseout = () => {
    heroImg.classList.remove('hero-img-hover')
}

/*=============== SERVICES SECTION ===============*/


const servicesModal = document.querySelectorAll('.services-modal'),
      modalbtns = document.querySelectorAll('.services-button'),
      modalCloses = document.querySelectorAll('.services-modal-close');


      
let modal = function(modalClick){

    servicesModal[modalClick].classList.add('active-modal');
}

modalbtns.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        modal(index);
    })
})



let close = function(btnClose){
    servicesModal[btnClose].classList.remove('active-modal');
}

modalCloses.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        
        close(index);
    })
})


/*=============== FAQ SECTION ===============*/


window.addEventListener('load', () => {
    const buttons = document.querySelectorAll('button');

    buttons.forEach(buttonE1 => {
        buttonE1.addEventListener('click', function() {
            const isCurrentClosed = !this.classList.contains('opened');


           
            /*Close all accordions */
            buttons.forEach(el => el.classList.remove('opened'));

            /*if current clicked is closed,
            then open it adding 'opened class'*/
            if(isCurrentClosed){
                this.classList.add('opened');
            }
        })
    })
})


/*===============STATS SECTION ===============*/


const counters = document.querySelectorAll('.counter');
const stats = document.querySelector('.stats');


const countingCounters = function (entries, observer) {

  entries.forEach(entry => {

    if (entry.isIntersecting && entry.intersectionRatio >= 0.2) {


      counters.forEach(counter => {

        counter.innerText = '0';


        const updateCounter = function () {


          const target = +counter.getAttribute('data-target');
            const c = +counter.innerText;
            const increment = target / 2000;
        
            if (c < target) {
              counter.innerText = `${Math.ceil(c + increment)}`;
              setTimeout(updateCounter, 50);
            } else {
              counter.innerText = target;
            }
      }
      updateCounter();
      });
      observer.unobserve(stats);
  }
  });
};


const options = {
  root: null,
  threshold: 0.2
};


const observer = new IntersectionObserver(countingCounters, options);


observer.observe(stats);
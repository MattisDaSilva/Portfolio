// HEADER DROPDOWN MENU
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}

// TYPED TEXT
var typed = new Typed(".multiple-text", {
  strings: ["<i class='bx bx-code-alt'></i>Developpeur Web"],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
})


// HEADER ANIME ON SCROLL
const navbarLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let currentSectionIndex = 0;
  let currentSectionOffset = Math.abs(sections[0].getBoundingClientRect().top);
  sections.forEach((section, index) => {
    const sectionOffset = Math.abs(section.getBoundingClientRect().top);
    if (sectionOffset < currentSectionOffset) {
      currentSectionIndex = index;
      currentSectionOffset = sectionOffset;
    }
  });
  navbarLinks.forEach((link, index) => {
    if (index === currentSectionIndex) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});


//SMOOTH SCROLL ON HEADER LINKS
navbarLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').substr(1);
    const section = document.querySelector(`#${sectionId}`);

    section.scrollIntoView({ behavior: 'smooth' });
  });
});

const navbarLinks2 = document.querySelectorAll('.dropdown_menu a');

navbarLinks2.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const sectionId = link.getAttribute('href').substr(1);
    const section = document.querySelector(`#${sectionId}`);

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});


//SMOOTH SCROLL MOUSE
const mouseLink = document.querySelector('.mid a');

mouseLink.addEventListener('click', event => {
  event.preventDefault();

  const sectionId = mouseLink.getAttribute('href').substr(1);
  const section = document.querySelector(`#${sectionId}`);

  section.scrollIntoView({ behavior: 'smooth' });
});


//FORMATION
const events = document.querySelectorAll('.event');

events.forEach(event => {
  event.addEventListener('click', () => {
    events.forEach(event => event.classList.remove('active'));

    event.classList.add('active');
  });
});

//FORMATION MOBILE
const toggleArrow = document.querySelector('.toggle-arrow')
const toggleArrowIcon = document.querySelector('.toggle-arrow i')
const SeeMore = document.querySelector('.seemore')

toggleArrow.onclick = function () {
    SeeMore.classList.toggle('open')
    const isOpen = SeeMore.classList.contains('open')

    toggleArrowIcon.classList = isOpen
        ? 'bx bx-chevron-up bx-burst'
        : 'bx bx-chevron-down bx-burst'
}

const toggleArrow2 = document.querySelector('.toggle-arrow2')
const toggleArrowIcon2 = document.querySelector('.toggle-arrow2 i')
const SeeMore2 = document.querySelector('.seemore2')

toggleArrow2.onclick = function () {
    SeeMore2.classList.toggle('open')
    const isOpen = SeeMore2.classList.contains('open')

    toggleArrowIcon2.classList = isOpen
        ? 'bx bx-chevron-up bx-burst'
        : 'bx bx-chevron-down bx-burst'
}

const toggleArrow3 = document.querySelector('.toggle-arrow3')
const toggleArrowIcon3 = document.querySelector('.toggle-arrow3 i')
const SeeMore3 = document.querySelector('.seemore3')

toggleArrow3.onclick = function () {
    SeeMore3.classList.toggle('open')
    const isOpen = SeeMore3.classList.contains('open')

    toggleArrowIcon3.classList = isOpen
        ? 'bx bx-chevron-up bx-burst'
        : 'bx bx-chevron-down bx-burst'
}

const toggleArrow4 = document.querySelector('.toggle-arrow4')
const toggleArrowIcon4 = document.querySelector('.toggle-arrow4 i')
const SeeMore4 = document.querySelector('.seemore4')

toggleArrow4.onclick = function () {
    SeeMore4.classList.toggle('open')
    const isOpen = SeeMore4.classList.contains('open')

    toggleArrowIcon4.classList = isOpen
        ? 'bx bx-chevron-up bx-burst'
        : 'bx bx-chevron-down bx-burst'
}

//PORTFOLIO
const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


// CONTACTEZ MOI

function fonction() {
  let Valide = true;

  let prenomInput = document.getElementById("prenom");
  if (prenomInput.value.length < 3 || prenomInput.value.length > 100 || /^[a-zA-Z ]+$/.test(prenomInput.value) == false) {
    prenomInput.placeholder = "Prénom non valide";
    prenomInput.style.color = "#ffac48";
    Valide = false;
  } else {
    prenomInput.style.color = "#fff";
  }


  let nomInput = document.getElementById("nom");
  if (nomInput.value.length < 3 || nomInput.value.length > 100 || /^[a-zA-Z ]+$/.test(nomInput.value) == false) {
    nomInput.placeholder = "Nom non valide";
    nomInput.style.color = "#ffac48";
    Valide = false;
  } else {
    nomInput.style.color = "#fff";
  }

  let mailInput = document.getElementById("mail");
  if (mailInput.value.length < 3 || mailInput.value.length > 100) {
    mailInput.placeholder = "Adresse Mail non valide";
    mailInput.style.color = "#ffac48";
    Valide = false;
  } else {
    mailInput.style.color = "#fff";
  }

  let telInput = document.getElementById("tel");
  if (telInput.value.length < 3 || telInput.value.length > 100) {
    telInput.placeholder = "Numero de téléphone non valide";
    telInput.style.color = "#ffac48";
    Valide = false;
  } else {
    telInput.style.color = "#fff";
  }

  return Valide;

}

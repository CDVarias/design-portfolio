const goTopBtn = document.getElementById("gotopbtn-id");
const rootElement = document.documentElement;

// const modal = document.getElementById("modal-id");
const modalBtns = document.querySelectorAll(".modal-thumbnail");
const closeBtns = document.querySelectorAll(".close");

const navbar = document.querySelector("header");

function initCarousel(carouselElement,slideClass){
  const slides = carouselElement.querySelectorAll(`.${slideClass}`);
  const prevButton = carouselElement.querySelector(".prev");
  const nextButton = carouselElement.querySelector(".next");
  const counter = carouselElement.querySelector(".counter");
  carouselElement.slideIndex = 1;

  function showSlides(n){
    if (n > slides.length){
      carouselElement.slideIndex = 1;
    }
    if (n < 1) {
      carouselElement.slideIndex = slides.length;
    }
    Array.from(slides).forEach(slide =>{
      slide.classList.remove("active");
    })
    slides[carouselElement.slideIndex - 1].classList.add("active");
    updateCounter();
  }

  function plusSlides (n){
    showSlides(carouselElement.slideIndex += n);
  }

  function updateCounter(){
      if(counter){
        counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;
      }
  }

  showSlides(carouselElement.slideIndex);

  prevButton.addEventListener("click", () => plusSlides(-1));
  nextButton.addEventListener("click", () => plusSlides(1));
}

function goTop(){
    rootElement.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

function handleScroll(){
    // this checks the total height you scrolled
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if((rootElement.scrollTop / scrollTotal) > 0.50){
        // show button
        goTopBtn.classList.add("showBtn")
    }
    else {
        // hide button
        goTopBtn.classList.remove("showBtn")
    }
}

function resetSlides(carouselElement, slideClass){
  const slides = carouselElement.querySelectorAll(`.${slideClass}`);
  const counter = carouselElement.querySelector(".counter");
  carouselElement.slideIndex = 1;

  Array.from(slides).forEach(slide =>{
    slide.classList.remove("active");
  })
  slides[0].classList.add("active");

  if (counter){
    counter.textContent = `${carouselElement.slideIndex} / ${slides.length}`;
  }
}

function openModal(event) {
    const modalId = event.currentTarget.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    goTopBtn.style.display = "none";
    document.querySelector(".navbar").classList.add("navbar-hidden");
    document.body.style.overflow = "hidden";
    // Add event listener to close modal when clicking outside
    window.addEventListener("click", outsideModal);
  }


function closeModal(e){
    // for x button in the modal
    const modal = e.currentTarget.closest(".modal")
    modal.style.display = "none";
    goTopBtn.style.display = "";
    document.querySelector(".navbar").classList.remove("navbar-hidden");
    document.body.style.overflow = "";

    const carouselElement = modal.querySelector(".modal-left");
    const slideClass = carouselElement.getAttribute("data-slide-class");
    resetSlides(carouselElement,slideClass);
}

// Function to close the modal when clicking outside of it
function outsideModal(e) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (e.target === modal) {
        modal.style.display = "none";
        goTopBtn.style.display = "";
        document.querySelector(".navbar").classList.remove("navbar-hidden");
        document.body.style.overflow = "";

        const carouselElement = modal.querySelector(".modal-left");
        const slideClass = carouselElement.getAttribute("data-slide-class");
        resetSlides(carouselElement,slideClass);

        window.removeEventListener("click", outsideModal);
      }
    });
  }

document.addEventListener("scroll", handleScroll)
goTopBtn.addEventListener("click", goTop)

modalBtns.forEach(modalBtn =>{
    modalBtn.addEventListener("click", openModal)
})

// Iterate through all elements that have the class "closeBtn"
closeBtns.forEach(closeBtn => {
    // For each close button, add an event listener that listens for the "click event" and then call the closeModal function
    closeBtn.addEventListener("click", closeModal);
})

document.querySelectorAll(".modal-left").forEach(carouselElement =>{
  const slideClass = carouselElement.getAttribute("data-slide-class")
  initCarousel(carouselElement,slideClass);
})




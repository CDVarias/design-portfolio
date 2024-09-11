
import {goTop,handleScroll} from './js/go-top.js';
import { goTopBtn } from './js/go-top.js';

const modalBtns = document.querySelectorAll(".modal-thumbnail");
const closeBtns = document.querySelectorAll(".close");
const closeBtns2 = document.querySelectorAll(".close2")

const navbar = document.querySelector("header");
const topNav = document.getElementById("topnav-icon-id");

const mobileNav = document.getElementById("mobile-nav-id");
let openedMobileNav = false;
const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");

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


function closeModal(event){
    // for close button in the modal
    const modal = event.currentTarget.closest(".modal")
    modal.style.display = "none";
    goTopBtn.style.display = "";
    document.querySelector(".navbar").classList.remove("navbar-hidden");
    document.body.style.overflow = "";

    const carouselElement = modal.querySelector(".modal-left");
    const carouselElement2 = modal.querySelector(".modal-single");
    if (carouselElement) {
      const slideClass = carouselElement.getAttribute("data-slide-class");
      resetSlides(carouselElement, slideClass);
    }
    
    if (carouselElement2) {
      const slideClass2 = carouselElement2.getAttribute("data-slide-class");
      resetSlides(carouselElement2, slideClass2);
    }
   
}

function outsideModal(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
        goTopBtn.style.display = "";
        document.querySelector(".navbar").classList.remove("navbar-hidden");
        document.body.style.overflow = "";

    const carouselElement = modal.querySelector(".modal-left");
    const carouselElement2 = modal.querySelector(".modal-single");
    if (carouselElement) {
      const slideClass = carouselElement.getAttribute("data-slide-class");
      resetSlides(carouselElement, slideClass);
    }
    
    if (carouselElement2) {
      const slideClass2 = carouselElement2.getAttribute("data-slide-class");
      resetSlides(carouselElement2, slideClass2);
    }

        window.removeEventListener("click", outsideModal);
      }
    });
  }

function openMobilenav(){
  openedMobileNav = !openedMobileNav;
  if (openedMobileNav){
    mobileNav.style.display = "flex";
    document.body.style.overflowY = "hidden";
  }
  else{
    mobileNav.style.display = "none";
    document.body.style.overflowY = "auto";
  }
}

function openMobileNavLinks(){
  openedMobileNav = false;
  mobileNav.style.display = "none";
  document.body.style.overflowY = "auto";
}


topNav.addEventListener("click", openMobilenav);

mobileNavLinks.forEach(linkBtn =>{
  linkBtn.addEventListener("click", openMobileNavLinks)
})

modalBtns.forEach(modalBtn =>{
    modalBtn.addEventListener("click", openModal)
})

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", closeModal);
})

closeBtns2.forEach(closeBtn => {
  closeBtn.addEventListener("click", closeModal);
})

document.querySelectorAll(".modal-left").forEach(carouselElement =>{
  const slideClass = carouselElement.getAttribute("data-slide-class");
  initCarousel(carouselElement,slideClass);
})

document.querySelectorAll(".modal-single").forEach(carouselElement =>{
  const slideClass = carouselElement.getAttribute("data-slide-class");
  initCarousel(carouselElement, slideClass);
})






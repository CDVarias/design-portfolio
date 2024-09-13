import { goTopBtn } from "./go-top";
import { resetSlides } from "./modal-reset";

function openModal(event) {
    const modalId = event.currentTarget.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    toggleGoTopBtn("none");
    document.querySelector(".navbar").classList.add("navbar-hidden");
    document.body.style.overflow = "hidden";

    window.addEventListener("click", outsideModal);
  }

function closeModal(event){
    const modal = event.currentTarget.closest(".modal")
    modal.style.display = "none";
    toggleGoTopBtn("");
    document.querySelector(".navbar").classList.remove("navbar-hidden");
    document.body.style.overflow = "";

    resetModalCarousel(modal);
   
}

function outsideModal(event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach(modal => {
      if (event.target === modal) {
        modal.style.display = "none";
        toggleGoTopBtn("");
        document.querySelector(".navbar").classList.remove("navbar-hidden");
        document.body.style.overflow = "";

        window.removeEventListener("click", outsideModal);
      }
    });
  }

function resetModalCarousel(modal){
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

function toggleGoTopBtn(display) {
  goTopBtn.style.display = display;
}

export default function setModalBtns(){
  const modalBtns = document.querySelectorAll(".modal-thumbnail");
  const closeBtns = document.querySelectorAll(".close");
  const closeBtns2 = document.querySelectorAll(".close2");

modalBtns.forEach(modalBtn =>{
    modalBtn.addEventListener("click", openModal)
})

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener("click", closeModal);
})

closeBtns2.forEach(closeBtn => {
  closeBtn.addEventListener("click", closeModal);
})
}


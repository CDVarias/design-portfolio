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

export default function initModalCarousel(){
    document.querySelectorAll(".modal-left").forEach(carouselElement =>{
        const slideClass = carouselElement.getAttribute("data-slide-class");
        initCarousel(carouselElement,slideClass);
      })
      
      document.querySelectorAll(".modal-single").forEach(carouselElement =>{
        const slideClass = carouselElement.getAttribute("data-slide-class");
        initCarousel(carouselElement, slideClass);
      })
}
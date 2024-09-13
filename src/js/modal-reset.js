
export function resetSlides(carouselElement, slideClass){
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
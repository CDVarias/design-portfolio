const goTopBtn = document.getElementById("gotopbtn-id");
const rootElement = document.documentElement;

const modal = document.getElementById("modal-id");
const modalBtns = document.querySelectorAll("#modal-thumbnail-id");
const closeBtns = document.querySelectorAll(".close");

// selects all elements with className "mySlides" and place it inside the variable "slides"
const slides = document.getElementsByClassName("mySlides"); 
// selects the first element that matches the prev selector
const prevButton = document.querySelector(".prev");
// selects the first element that matches the next selector
const nextButton = document.querySelector(".next");
// selects the first element that matches the counter selector
const counter = document.querySelector(".counter");

// initializing the slide index to 1 (indicates the first slide)
let slideIndex = 1;

// calling showSlide function to display the first slide
showSlides(slideIndex);

// function plusSlides to increase or decrease the slide index by "n" and show the corresponding slide
function plusSlides(n){
    showSlides(slideIndex += n);
}

//  function currentSlide to set the slide index to "n" and show the corresponding slide
function currentSlide(n){
    showSlides(slideIndex = n);
}

//  function updateCounter to update the counter text to display the current slide number and total slides.
function updateCounter(){
    counter.textContent = `${slideIndex} / ${slides.length}`
}

// function showSlides to display the slide corresponding to the current slide index "n"
function showSlides(n){
    // variable i 
    let i;
    // if statement with condition that if the slideIndex is greater than the number of slides, set it to 1 (loop back to the first slide)
    if(n > slides.length){
        slideIndex = 1
    }
    // if statement that if the slide index is less than 1, set it to the number of slides (loop back to the last slide)
    if(n < 1){
        slideIndex = slides.length
    }
    // for loop through all slides and set their display style to "none" (hide them)
    for(i=0; i < slides.length; i+=1){
        // slides that retrieves the number from an array, and put it style display to none
        slides[i].classList.remove("active");
    }
    // display the slide corresponding to the current slide index
    slides[slideIndex-1].classList.add("active");
    // update the counter to reflect the current slide
    updateCounter();
}

// Add an event listener to the prevButton to call plusSlides with -1 (go to the previous slide) when clicked
prevButton.addEventListener("click", () =>{
    plusSlides(-1);
})

// Add an event listener to the nextButton to call plusSlides with 1 (go to the next slide when clicked)
nextButton.addEventListener("click", () =>{
    plusSlides(1);
})


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

function openModal(){
    // show modal
    modal.style.display = "block";
    
}

function closeModal(){
    // for x button in the modal
    modal.style.display = "none";
}

function outsideModal(event){
    // when users clicked outside the modal, the modal closes
    if (event.target === modal){
        modal.style.display = "none";
    }
}



document.addEventListener("scroll", handleScroll)
goTopBtn.addEventListener("click", goTop)

// Loop through each elements with the id modalBtn and attach a click event listener
modalBtns.forEach(modalBtn => {
    // Add a click event listener to the current button for open modal
    modalBtn.addEventListener("click", openModal)
})

// Iterate through all elements that have the class "closeBtn"
closeBtns.forEach(closeBtn => {
    // For each close button, add an event listener that listens for the "click event" and then call the closeModal function
    closeBtn.addEventListener("click", closeModal)
})

window.addEventListener("click", outsideModal)



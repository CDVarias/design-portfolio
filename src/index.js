const goTopBtn = document.getElementById("gotopbtn-id");
const rootElement = document.documentElement;

const modal = document.getElementById("modal-id");
const modalBtns = document.querySelectorAll("#modal-thumbnail-id");
const closeBtns = document.querySelectorAll(".close");


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



export const goTopBtn = document.getElementById("gotopbtn-id");
const rootElement = document.documentElement;

export function goTop(){
    rootElement.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

export function handleScroll(){
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

document.addEventListener("scroll", handleScroll);
goTopBtn.addEventListener("click", goTop);


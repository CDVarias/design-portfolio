export const goTopBtn = document.getElementById("gotopbtn-id");
const rootElement = document.documentElement;

function goTop(){
    rootElement.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

function handleScroll(){
    const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if((rootElement.scrollTop / scrollTotal) > 0.50){
        goTopBtn.classList.add("showBtn")
    }
    else {
        goTopBtn.classList.remove("showBtn")
    }
}

export function initGoTopButton(){
    document.addEventListener("scroll", handleScroll);
    goTopBtn.addEventListener("click", goTop);
}


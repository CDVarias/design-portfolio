const mobileNav = document.getElementById("mobile-nav-id");
let openedMobileNav = false;

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

export default function openMobileNav(){
const topNav = document.getElementById("topnav-icon-id");  
topNav.addEventListener("click", openMobilenav);

const mobileNavLinks = document.querySelectorAll(".mobile-nav-links a");
mobileNavLinks.forEach(linkBtn =>{
  linkBtn.addEventListener("click", openMobileNavLinks)
})
}
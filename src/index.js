import "./styles/utils.css";
import "./styles/header.css";
import "./styles/welcome.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./styles/education.css";
import "./styles/contact.css";
import "./styles/footer.css";

import { loadDataOnPage } from "./js/loader.js";
import { initGoTopButton } from "./js/go-top.js";
import scrollEffect from "./js/scroll.js";
import setModalBtns from "./js/modal.js";
import openMobileNav from "./js/mobile-nav.js";
import initModalCarousel from "./js/carousel.js";

loadDataOnPage();
initGoTopButton();
scrollEffect();
setModalBtns();
openMobileNav();
initModalCarousel();

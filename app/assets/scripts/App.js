import "../styles/styles.css"
import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import StickyHeader from  "./modules/StickyHeader"

if (module.hot) {
  module.hot.accept()
}

/* CODE BELOW */
new MobileMenu()
new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 80)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 75)
let modal

// Load Modal.js script JUST if button is clicked. Otherwise it doesn't load the script on website load. (Best performance)
document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ "./modules/Modal.js").then(modal => {
        modal = new modal.default()
        setTimeout(() => modal.openModal(), 20)
      }).catch(() => console.log("There was an error with the modal"))  
    } else {
      modal.openModal()
    }
  })
})
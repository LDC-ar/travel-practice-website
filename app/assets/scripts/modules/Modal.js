class Modal {
  constructor() {
    this.injectHTML()
    this.modal = document.querySelector(".modal")
    this.closeButton = document.querySelector(".modal__close")
    this.events()
  }

  events() {
    // listen for close click
    this.closeButton.addEventListener("click", () => this.closeModal())
    // Pushes any key
    document.addEventListener("keyup", e => this.keyPressHandler(e))
  }

  openModal() {
    this.modal.classList.add("modal--is-visible")
  }
  
  closeModal() {
    this.modal.classList.remove("modal--is-visible")
  }

  keyPressHandler(e) {
    // If "Esc" key is pressed
    if (e.keyCode == 27) {
      this.closeModal()
    }
  }

  injectHTML() {
    document.body.insertAdjacentHTML("beforeend", `
    <div class="modal">
    <div class="modal__inner">
      <h2 class="section-title section-title--blue section-title--less-margin">Get in <strong>Touch</strong></h2>
      <div class="wrapper wrapper--narrow">
        <p class="modal__description">If you like this website, connect with me on any of the platforms below!</p>
      </div>

      <div class="social-icons">
        <a href="https://twitter.com/LeandroCastagno" target="_blank" class="social-icons__icon"><img src="assets/images/icons/twitter.svg" alt="Twitter"></a>
        <a href="mailto:info@leandro-castagno.com" class="social-icons__icon"><img src="assets/images/icons/mail.svg" alt="Email"></a>
      </div>
    </div>
    <div class="modal__close">X</div>
  </div>
    `)
  }
}

export default Modal;
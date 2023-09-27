class MobileMenu {
  constructor() {
    this.siteHeader = document.querySelector(".site-header")
    this.menuIcon = document.querySelector(".site-header__menu-icon")
    this.menuContent = document.querySelector(".site-header__menu-content")
    this.events()
  }

  events() {
    this.menuIcon.addEventListener('click', () => {
      this.toggleMenu()
      this.toggleAriaLabel()
    })
  }

  toggleMenu() {
    this.menuContent.classList.toggle("site-header__menu-content--is-visible")
    this.siteHeader.classList.toggle("site-header--is-expanded")
    this.siteHeader.classList.remove("site-header--dark")
    this.menuIcon.classList.toggle("site-header__menu-icon--close-x")
  }

  // Function to toggle menuIcon aria-label
  toggleAriaLabel() {
	// Check if the menu is open and set the aria-label accordingly
	  if (this.menuIcon.classList.contains('site-header__menu-icon--close-x')) {
      this.menuIcon.setAttribute('aria-label', 'Close menu');
	  } else {
      this.menuIcon.setAttribute('aria-label', 'Open menu');
	  }
}
}

export default MobileMenu;
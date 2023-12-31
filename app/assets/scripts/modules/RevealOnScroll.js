import {throttle, debounce} from "lodash"

class RevealOnScroll {
  constructor(elements, thresholdPercent) {
    this.thresholdPercent = thresholdPercent
    this.itemsToReveal = elements
    this.browserHeight = window.innerHeight
    this.hideInitially()
    this.scrollThrottle = throttle(this.calcCaller, 200).bind(this)
    this.events()
  }

  events() {
    window.addEventListener('scroll', this.scrollThrottle)
    window.addEventListener('resize', debounce(() => {
      this.browserHeight = window.innerHeight
    }, 333))
  }

  calcCaller() {
    this.itemsToReveal.forEach(el => {
      if(el.isReveal == false) {
        this.calculateIfScrolledTo(el)
      }
    })
  }

  calculateIfScrolledTo(el) {
    if (window.scrollY + this.browserHeight > el.offsetTop) {
      let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
      if (scrollPercent < this.thresholdPercent) {
        el.classList.add("reveal-item--is-visible")
        el.isReveal = true
        if (el.isLastItem) {
          window.removeEventListener("scroll", this.scrollThrottle)
        }
      }  
    }
  }

  hideInitially() {
    this.itemsToReveal.forEach(el => {
      el.classList.add("reveal-item")
      el.isReveal = false
    })
    this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
  }
}

export default RevealOnScroll;
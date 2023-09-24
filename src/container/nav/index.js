class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #back = () => {
    return history.back()
  }

  static #forvard = () => {
    return history.forvard()
  }

  static #reload = () => {
    return location.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Введіть коректну URL адресу')
      console.log(e)
    }
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static init = () => {
    window.back.onclick = this.#back
    window.forvard.onclick = this.#forvard
    window.reload.onclick = this.#reload
    window.home.onclick = this.#home
    window.go.onclick = this.#go

    window.input.value = location.href
  }
}

Nav.init()

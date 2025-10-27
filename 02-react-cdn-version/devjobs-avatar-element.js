class DevJobsAvatar extends HTMLElement {
  constructor() {
    super(); // llamar al constructor de HTMLElement

    this.attachShadow({ mode: 'open' }) // Crea un DOM paralelo (shadow DOM)
  }

  createUrl(service, username) {
    return `https://unavatar.io/${service}/${username}`
  }

  render() {
    const service = this.getAttribute('service') ?? 'github'
    const username = this.getAttribute('username') ?? 'RodrigoBombieri'
    const size = this.getAttribute('size') ?? '40'

    const url = this.createUrl(service, username)
    console.log(url)
    this.shadowRoot.innerHTML = `
    <style>
      img {
        width: ${size}px;
        height: ${size}px;
        border-radius: 9999px;
      }
    </style>

      <img 
        src="${url}" 
        alt="Avatar de ${username}" 
        class="avatar"
      />
    `
  }
  /* connectedCallback sirve para ejecutar código cuando el elemento es añadido al DOM */
  connectedCallback() { 
    this.render()
  }
}

customElements.define('devjobs-avatar', DevJobsAvatar) 
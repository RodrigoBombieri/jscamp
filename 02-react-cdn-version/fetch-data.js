const container = document.querySelector('.jobs-listings')
const RESULTS_PER_PAGE = 3

let allJobs = [] // Guardar todos los trabajos
let filteredJobs = [] // Trabajos después de aplicar filtros
let currentPage = 1

// Función para renderizar los trabajos de una página específica
function renderJobs(jobs, page = 1) {
  const startIndex = (page - 1) * RESULTS_PER_PAGE
  const endIndex = startIndex + RESULTS_PER_PAGE
  const jobsToShow = jobs.slice(startIndex, endIndex)

  // Limpiar el contenedor
  container.innerHTML = ''

  // Si no hay resultados
  if (jobsToShow.length === 0) {
    container.innerHTML = '<p>No se encontraron empleos con los filtros seleccionados.</p>'
  }

  // Renderizar solo los trabajos de la página actual
  jobsToShow.forEach((job) => {
    const article = document.createElement("article")
    article.className = "job-listing-card"

    article.dataset.modalidad = job.data.modalidad
    article.dataset.nivel = job.data.nivel
    article.dataset.technology = job.data.technology

    article.innerHTML = `<div>
          <h3 class="job-listing-title">${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
          </div>
          <button class="button-apply-job">Aplicar</button>`

    container.appendChild(article)
  })

  // Actualizar contadores
  updateCounters(jobs.length, allJobs.length)
}

// Función para actualizar los contadores
function updateCounters(visible, total) {
  const jobCountElement = document.querySelector('#job-count')
  const totalJobsElement = document.querySelector('#total-jobs')
  
  if (jobCountElement) jobCountElement.textContent = visible
  if (totalJobsElement) totalJobsElement.textContent = total
}

// Función para renderizar la paginación
function renderPagination(totalJobs, page) {
  const totalPages = Math.ceil(totalJobs / RESULTS_PER_PAGE)
  const paginationContainer = document.querySelector('.paginacion')
  
  // Limpiar paginación existente
  paginationContainer.innerHTML = ''

  // Si solo hay una página o ninguna, no mostrar paginación
  if (totalPages <= 1) return

  // Crear botones de paginación
  for (let i = 1; i <= totalPages; i++) {
    const button = document.createElement('button')
    button.textContent = i
    button.className = 'page-button'
    
    // Marcar página actual como activa
    if (i === page) {
      button.classList.add('active')
    }

    // Agregar evento click
    button.addEventListener('click', () => {
      currentPage = i
      renderJobs(filteredJobs, currentPage)
      renderPagination(filteredJobs.length, currentPage)
      
      // Scroll al inicio de la lista (opcional)
      container.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })

    paginationContainer.appendChild(button)
  }
}

// Función para aplicar filtros y búsqueda (será llamada desde filters.js)
function applyFiltersAndRender(filterFn) {
  filteredJobs = allJobs.filter(filterFn)
  currentPage = 1 // Resetear a primera página
  renderJobs(filteredJobs, currentPage)
  renderPagination(filteredJobs.length, currentPage)
}

// Cargar datos iniciales
fetch("./data.json")
  .then((response) => response.json())
  .then((jobs) => {
    allJobs = jobs // Guardar todos los trabajos
    filteredJobs = jobs // Inicialmente todos están "filtrados"
    currentPage = 1
    
    // Renderizar primera página
    renderJobs(filteredJobs, currentPage)
    
    // Renderizar paginación
    renderPagination(filteredJobs.length, currentPage)
  })
  .catch((error) => {
    console.error('Error al cargar los trabajos:', error)
  })

// Exportar funciones y variables para usar en filters.js
export { allJobs, applyFiltersAndRender }
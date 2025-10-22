import { state } from './config.js'

state.count++

console.log(state)

const filter = document.querySelector('#filter-location')
const searchInput = document.querySelector('#empleos-search-input')
let jobCountElement = document.querySelector('#job-count')
let totalJobsElement = document.querySelector('#total-jobs')

filter.addEventListener('change', function () {
  const jobs = document.querySelectorAll('.job-listing-card')

  const selectedValue = filter.value


  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad
    const modalidad = job.getAttribute('data-modalidad')
    const isShown = selectedValue === '' || selectedValue === modalidad
    job.classList.toggle('is-hidden', isShown === false)
  })
  const totalJobs = document.querySelectorAll('.job-listing-card').length
  const visibleJobs = document.querySelectorAll('.job-listing-card:not(.is-hidden)').length
  if (jobCountElement) jobCountElement.textContent = visibleJobs
  if (totalJobsElement) totalJobsElement.textContent = totalJobs
})



/* Filtro de busqueda por título */
// Obtener referencia al input de búsqueda

// Agregar un event listener para el evento 'input'
searchInput.addEventListener('input', function () {
  const jobs = document.querySelectorAll('.job-listing-card') // Obtener todos los empleos
  const searchTerm = searchInput.value.toLowerCase() // Obtener el término de búsqueda y convertirlo a minúsculas

  // Recorrer cada empleo y verificar si el título incluye el término de búsqueda
  jobs.forEach(job => {
    const title = job.querySelector('h3').textContent.toLowerCase() // Obtener el título del empleo y convertirlo a minúsculas
    const isShown = title.includes(searchTerm) // Verificar si el título incluye el término de búsqueda
    // Crear un nuevo array con las ofertas que coinciden con la búsqueda
    job.classList.toggle('is-hidden', isShown === false) // Mostrar u ocultar el empleo según el resultado
  })

  // Actualizar contador después de filtrar
  const totalJobs = document.querySelectorAll('.job-listing-card').length
  const visibleJobs = document.querySelectorAll('.job-listing-card:not(.is-hidden)').length
  if (jobCountElement) jobCountElement.textContent = visibleJobs
  if (totalJobsElement) totalJobsElement.textContent = totalJobs
})
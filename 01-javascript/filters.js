import { state } from './config.js'
import { allJobs, applyFiltersAndRender } from './fetch-data.js'

state.count++
console.log(state)

const filterLocation = document.querySelector('#filter-location')
const filterTechnology = document.querySelector('#filter-technology')
const filterLevel = document.querySelector('#filter-experience-level')
const searchInput = document.querySelector('#empleos-search-input')

// Variables para mantener el estado de los filtros
let currentSearchTerm = ''
let currentLocationFilter = ''
let currentTechnologyFilter = ''
let currentLevelFilter = ''

// Función que define la lógica de filtrado
function getFilterFunction() {
  return (job) => {
    // Filtro de búsqueda por título
    const titleMatch = job.titulo.toLowerCase().includes(currentSearchTerm)
    
    // Filtros de selects
    const locationMatch = currentLocationFilter === '' || job.data.modalidad === currentLocationFilter
    const technologyMatch = currentTechnologyFilter === '' || job.data.technology === currentTechnologyFilter
    const levelMatch = currentLevelFilter === '' || job.data.nivel === currentLevelFilter
    
    // Debe cumplir TODOS los criterios
    return titleMatch && locationMatch && technologyMatch && levelMatch
  }
}

// Función para aplicar todos los filtros
function applyAllFilters() {
  // Esperar a que allJobs tenga datos
  if (!allJobs || allJobs.length === 0) {
    setTimeout(applyAllFilters, 100)
    return
  }
  
  applyFiltersAndRender(getFilterFunction())
}

// Event listeners para los filtros de select
filterLocation.addEventListener('change', function () {
  currentLocationFilter = filterLocation.value
  applyAllFilters()
})

filterTechnology.addEventListener('change', function () {
  currentTechnologyFilter = filterTechnology.value
  applyAllFilters()
})

filterLevel.addEventListener('change', function () {
  currentLevelFilter = filterLevel.value
  applyAllFilters()
})

// Event listener para el input de búsqueda
searchInput.addEventListener('input', function () {
  currentSearchTerm = searchInput.value.toLowerCase()
  applyAllFilters()
})
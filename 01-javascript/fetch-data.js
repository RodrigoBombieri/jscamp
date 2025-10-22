const container = document.querySelector('.jobs-listings')

const RESULTS_PER_PAGE = 3

fetch("./data.json") // Ruta al archivo JSON
  .then((response) => {
    return response.json(); // Convierte la respuesta en JSON y obtenemos un array de objetos
  })
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article") // Crea un elemento article
      article.className = "job-listing-card" // Asigna una clase al article

      article.dataset.modalidad = job.data.modalidad
      article.dataset.nivel = job.data.nivel
      article.dataset.technology = job.data.technology

      article.innerHTML = `<div>
            <h3 class="job-listing-title">${job.titulo}</h3>
            <small>${job.empresa} | ${job.ubicacion}</small>
            <p>${job.descripcion}</p>
            </div>
            <button class="button-apply-job">Aplicar</button>`

      container.appendChild(article) // Agrega el article al contenedor principal
    });
    // Actualizar contador inicial después de cargar todos los empleos
    const totalJobs = document.querySelectorAll('.job-listing-card').length
    const visibleJobs = document.querySelectorAll('.job-listing-card:not(.is-hidden)').length
    const jobCountElement = document.querySelector('#job-count')
    const totalJobsElement = document.querySelector('#total-jobs')
    
    if (jobCountElement) jobCountElement.textContent = visibleJobs
    if (totalJobsElement) totalJobsElement.textContent = totalJobs
  });


// recupera solo el primer boton que encuentre
// const boton = document.querySelector('.button-apply-job')
// console.log(boton) // null si no lo encuentra

/* Primera forma */
/* Para un solo botón */
// if (boton !== null) {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// }

/* Segunda forma */
/* Para varios botones */
// const botones = document.querySelectorAll('.button-apply-job')
// // devuelve un NodeList (array-like) con todos los botones que encuentre
// // o una lista vacia [] si no encuentra ninguno

// botones.forEach(boton => {
//   boton.addEventListener('click', function() {
//     boton.textContent = '¡Aplicado!'
//     boton.classList.add('is-applied')
//     boton.disabled = true
//   })
// })

/* Tercera forma */
/* Para varios botones, pero usando event delegation */

const jobsListingSelection = document.querySelector('.jobs-listings')

jobsListingSelection?.addEventListener('click', function (event) {
    /* Guarda el elemento que disparó el evento */
    const element = event.target
    /* Verifica si el elemento tiene la clase 'button-apply-job' */
    if (element.classList.contains('button-apply-job')) {
        element.textContent = '¡Aplicado!'
        element.classList.add('is-applied')
        element.disabled = true
    }   
})

const filter = document.querySelector('#filter-technology')

filter.addEventListener('change', function () {
    const selectedValue = filter.value
    console.log(selectedValue)
})
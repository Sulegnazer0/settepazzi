const hamburguer = document.querySelector('.hamburguer')
const menu = document.querySelector('.menu-navegacion')


hamburguer.addEventListener('click', ()=>{ 
    menu.classList.toggle("spread")
})

window.addEventListener('click', e =>{
    if(menu.classList.contains('spread')
        && e.target != menu && e.target != hamburguer){
        console.log('cerrar')                     /*Aqui es para el menu me desplace las opciones y ocultarlo cuando se de click afuera*/
        menu.classList.toggle("spread")
    }
})
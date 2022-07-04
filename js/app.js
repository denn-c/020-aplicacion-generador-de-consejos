const $numero = document.querySelector('.titulo')
const $consejo = document.querySelector('.consejo')
const $boton = document.querySelector('.boton')

const obtenerDatos = async() => {

    try{

        const resultado = await fetch('	https://api.adviceslip.com/advice')
        const datos = await resultado.json()
        $numero.textContent += datos.slip.id
        $consejo.textContent = datos.slip.advice
    }
    catch(error){
    }
}
obtenerDatos()

$boton.addEventListener('click', () => obtenerDatos())

const divCarrusel = document.querySelector('.carousel-inner');
//Esta funcion es para consultar a la api
const librosMasVistos = async () => {
    // con await fetch espero la respuesta de la api  https://www.etnassoft.com/api/v1/get/?criteria=most_viewed
    
    const respuestaAPI = await fetch(`https://www.etnassoft.com/api/v1/get/?criteria=most_viewed`);

    // Convierto respuestaAPI a un objeto JSON y lo guardo en la variable respuestaJSON
    const respuestaJSON = await respuestaAPI.json();

    return respuestaJSON;    
};

const libroRandom = async () => {
    const listaLibros = await librosMasVistos();
    
    return listaLibros[Math.floor(Math.random() * (listaLibros.length - 0))];
}

// Esta funcion usa la respuesta de librosMasVistos() y me genera los divs con la imagen para insertar al carrusel
const mostrarLibro = async () => {
        const libro = await libroRandom();
        divCarrusel.innerHTML="";
        if (libro.thumbnail){
                imagen = libro.thumbnail;
            }
        
        divCarrusel.innerHTML += `
        <div class="carousel-item active">
            <img src="${imagen}" class="d-block w-100">
        </div>`;
        };


setInterval(mostrarLibro, 3000);
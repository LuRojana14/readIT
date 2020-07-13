const formBuscar =  document.querySelector('.formulario-buscar'); 
const divResultado = document.querySelector('.resultado');

//Escucho permanentemente el formulario-buscar y cuando escucha un submit (click al boton buscar)
// dispara un evento
formBuscar.addEventListener('submit', (e) => {
    //obtener datos del formulario:
    const searchInputValue = document.querySelector('.book-search').value;
    //llama a la funcion consultar api 
    const resultado = consultarAPI(searchInputValue);
    imprimirResultados(resultado);
})


// Creo una funcion pasando el termino de busqueda como parametro
const consultarAPI = async (palabra) => {
    // con await fetch espero la respuesta de la api  https://www.googleapis.com/books/v1/volumes?q= pasandole
    // palabra que sería mi termino de busqueda. Y esto se guarda en una variable que llamo respuestaAPI
    
    const respuestaAPI = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${palabra}`)

    // Convertimos respuestaAPI a un objeto JSON y lo guardamos en la variable respuestaJSON
    const respuestaJSON = await respuestaAPI.json();

    console.log('respuesta 2:', respuestaJSON.items);
    return {
        respuestaJSON
    }
};


const imprimirResultados = (resultado) => {
    console.log('entra a imprimir resultados:', resultado)
    divResultado.innerHTML = '<h1> Holaaaaaa </h1>';

   const listaLibros = respuesta.items;
    console.log('lista', listaLibros);
    listaLibros.forEach(libro => {
    divResultado.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${libro.volumeInfo.imageLinks.thumbnail}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${libro.volumeInfo.title}</h5>
                <p class="card-text">${libro.volumeInfo.title}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> `;
    });
    
}
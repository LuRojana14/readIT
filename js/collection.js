const formBuscar =  document.querySelector('.formulario-buscar'); 
const divResultado = document.querySelector('.resultado');



// Creo una funcion pasando el termino de busqueda como parametro
const consultarAPI = async (palabra) => {
    // con await fetch espero la respuesta de la api  https://www.googleapis.com/books/v1/volumes?q= pasandole
    // palabra que sería mi termino de busqueda. Y esto se guarda en una variable que llamo respuestaAPI
    
    const respuestaAPI = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${palabra}`)

    // Convierto respuestaAPI a un objeto JSON y lo guardo en la variable respuestaJSON
    const respuestaJSON = await respuestaAPI.json();
    return respuestaJSON
    
};

// Consultar por categorias a la API
const consultarCategoria = async (category) => {
    
    const respuestaCategorias = await fetch(`http://openlibrary.org/subjects/${category}.json`);

    // Resperar la respuesta de las categorias y devolver un JSON
    const categorias = await respuestaCategorias.json();

    // devolvemos el resultado
    return {
         categorias
    }
};

const getCategories = async () => {
    
    const categoriasResponse = await fetch('https://www.etnassoft.com/api/v1/get/?get_categories=all');
    const categoriasLista = await categoriasResponse.json();

    return {
        categoriasLista
    }
    
}



// Imprimir categorias en menu seleccionable https://openlibrary.org/subjects
const imprimirCategorias = async () => {
    // definir categorias
    const categories = await getCategories();
    // seleccionar el select de categorias
    const selectCategoria = document.querySelector('.categories-list');

    // Recorremos el arreglo e imprimimos los <option>
    for(i = 0; i < categories.categoriasLista.length; i++){
        const option = document.createElement('option'); // Creo un elemento html <option></option> y lo guardo en la variable option
        option.value = categories.categoriasLista[i].name; // Asigno al elemento html <option value="Arts"></option>
        option.appendChild(document.createTextNode(option.value)); // Agrego dentro de cada nodo el texto correspondiente: <option value="Arts">Arts</option>
        selectCategoria.appendChild(option); //Pongo en el select grande cada nodo con la categoria
    }
}

const imprimirResultados = (resultado) => {
   const listaLibros = resultado.items;
    divResultado.innerHTML=""
    listaLibros.forEach(libro => {
    const newDiv= document.createElement("div")
    let thumbnail= ""//foto
    if (libro.volumeInfo.imageLinks){
        thumbnail=libro.volumeInfo.imageLinks.thumbnail
    }

    newDiv.innerHTML += `
        <div class="card cardlu" style="width: 18rem;">
            <img src="${thumbnail}" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">${libro.volumeInfo.title}</h5>
                <p class="card-text">${libro.volumeInfo.title}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div> `;

        divResultado.appendChild(newDiv)
    });
    
}


// Mostrar categorias en el select
imprimirCategorias();

//Escucho permanentemente el formulario-buscar y cuando escucha un submit (click al boton buscar)
// dispara un evento
formBuscar.addEventListener('submit', async (e) => {

    // leer el select
    const categorias = document.querySelector('.categories-list');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value; 

    //obtener datos del formulario:
    const searchInputValue = document.querySelector('.book-search').value;

    //llama a la funcion consultar api 
    //const resultado = await consultarCategoria(categoriaSeleccionada);
    
    const resultado = await consultarAPI(searchInputValue);
    

    imprimirResultados(resultado);
})
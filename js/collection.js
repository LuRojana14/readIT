const formBuscar =  document.querySelector('.formulario-buscar'); 
const divResultado = document.querySelector('.resultado');
const searchInputValue = document.querySelector('.book-search');

//------------------------------------------------------------------------------------//
//para que me aparezcan todos los libros por default
const inicio = async () => {
    // Mostrar categorias en el select
    imprimirCategorias();
    const librosDefault = await consultarCategoria("all");
    imprimirResultados(librosDefault);
}

//------------------------------------------------------------------------------------//

// Creo una funcion pasando el termino de busqueda como parametro
const consultarPorKeyword= async (keyword) => {
    // con await fetch espero la respuesta de la api  https://www.googleapis.com/books/v1/volumes?q= pasandole
    // palabra que sería mi termino de busqueda. Y esto se guarda en una variable que llamo respuestaAPI
    
    const respuestaAPI = await fetch(`https://www.etnassoft.com/api/v1/get/?keyword=${keyword}`);
    

    // Convierto respuestaAPI a un objeto JSON y lo guardo en la variable respuestaJSON
    const respuestaJSON = await respuestaAPI.json();
    return respuestaJSON
    
};

//----------------------------------------------------------------------------------//

// Consultar por categorias a la API
const consultarCategoria = async (category) => {
    
    const respuestaCategorias = await fetch(`https://www.etnassoft.com/api/v1/get/?category=${category}`);

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

const emptyArray= ["Arte - Bellas Artes"]

// Imprimir categorias en menu seleccionable https://openlibrary.org/subjects
const imprimirCategorias = async () => {
    // definir categorias
    const categories = await getCategories();
    // seleccionar el select de categorias
    const selectCategoria = document.querySelector('.categories-list');
    console.log(categories);
    

    console.log('catego:', categories);
    // Recorremos el arreglo e imprimimos los <option>
   
    
      for(i = 0; i < categories.categoriasLista.length; i++)
      {   
          //eliminar las categorias vacias (tengo q crear la const array )
          if ( categories.categoriasLista[i].name=== "Arte - Bellas Artes"){
              continue}
    // definir categorias
          

          const option = document.createElement('option'); // Creo un elemento html <option></option> y lo guardo en la variable option
          option.value = categories.categoriasLista[i].name; // Asigno al elemento html <option value="Arts"></option>
          option.appendChild(document.createTextNode(option.value)); // Agrego dentro de cada nodo el texto correspondiente: <option value="Arts">Arts</option>
          selectCategoria.appendChild(option); //Pongo en el select grande cada nodo con la categoria
      }
      
      
    

    

}

const imprimirResultados = (resultado) => {
   let listaLibros = resultado;
    console.log(listaLibros); 
   if(listaLibros.categorias){
       listaLibros = resultado.categorias;
    console.log(listaLibros);
   }
   
    divResultado.innerHTML="";
    listaLibros.forEach(libro => {
        const newDiv= document.createElement("div")
        let thumbnail= "";//foto
        if (libro.thumbnail){
            thumbnail=libro.thumbnail;
        }

        newDiv.innerHTML += `
            <div class="card cardlu" style="width: 18rem;">
                <img src="${thumbnail}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${libro.title}</h5>
                    <p class="card-text">${libro.author}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div> `;

        divResultado.appendChild(newDiv);
    });
    
}



//Escucho permanentemente el formulario-buscar y cuando escucha un submit (click al boton buscar)
// dispara un evento
inicio();

formBuscar.addEventListener('submit', async (e) => {

    // leer el select
    let resultado = '';
    const categorias = document.querySelector('.categories-list');
    const categoriaSeleccionada = categorias.options[categorias.selectedIndex].value; 
    
    console.log(categoriaSeleccionada);
    
    if(searchInputValue.value ===''){
        resultado = await consultarCategoria(categoriaSeleccionada);
    }else {
        console.log('que hay en:', searchInputValue.value);
        resultado = await consultarPorKeyword(searchInputValue.value);
    }

    imprimirResultados(resultado);
})






const pokemonContainer= document.querySelector('.pokemon-container')

function fetchPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res)=>res.json())
    .then((data)=>{
        createPokemon(data);
    }
        /* apiName.innerText=JSON.stringify(data.name) */
    )
    /* .catch(e=>console.error(new Error(e)));
    console.log(datos) */
}

/* apiButton.addEventListener('click',llamarAPI) */
function fetchPokemons(num){
    for (let i = 1; i <= num; i++) {
        fetchPokemon(i);
    }
}

function createPokemon(pokemon){
    const card= document.createElement('div');
    card.classList.add('pokemon-block');
    
    const spriteContainer=document.createElement('div');
    spriteContainer.classList.add('img-container');

    const sprite= document.createElement('img');
    sprite.src=pokemon.sprites.front_default

    spriteContainer.appendChild(sprite);

    const number=document.createElement('p');
    number.textContent=`#${pokemon.id.toString().padStart(3,0)}`;
    
    const name= document.createElement('p');
    name.classList.add('name');
    name.textContent=pokemon.name

    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);

    pokemonContainer.appendChild(card);
}
fetchPokemons(950);
/* function llamarAPI() {
    const json =
        fetch('https://reqres.in/api/users?page=2')
            .then(response => response.json())
            .then(data => dibujarDatos(data));
}

function dibujarDatos(json) {
    const filas = json.data.map(obj => fila(obj));

    document.getElementById('datos').innerHTML = filas.join('');

}

function fila(obj) {
    return `
            <tr>
                <th>${obj.first_name}</th>
                <th>${obj.last_name}</th>
                <th><img src="${obj.avatar}" alt=""></th>
            </tr>
    `
}

llamarAPI();
 */
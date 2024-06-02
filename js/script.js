const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');

abrir.addEventListener('click', () => {
    if (nav.classList.contains('visible')) {
        nav.classList.remove('visible');
    }else{
        nav.classList.add('visible');
    }
    
})

const API_URL = 'https://api.themoviedb.org/3'
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODMzNjgxYjMwOTE2ZTk1OTY0NGNlMmI1N2Y1NjkzYSIsInN1YiI6IjY2NTMzYTdiMDQwYTAwNmVkY2Q3NDE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V2fbudi_0NoV-vI86P1Yku-ViZdYOIH_z8mKFha08ZY'
let currnetPage = 1;

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODMzNjgxYjMwOTE2ZTk1OTY0NGNlMmI1N2Y1NjkzYSIsInN1YiI6IjY2NTMzYTdiMDQwYTAwNmVkY2Q3NDE2OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.V2fbudi_0NoV-vI86P1Yku-ViZdYOIH_z8mKFha08ZY'
    }
};

function llamarAPI(page) {
    fetch(`${API_URL}/movie/popular?page=${page}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`,
        },
    })
        .then(response => response.json())
        .then(data => dibujarDatos(data));
}


function dibujarDatos(json) {
    const filas = json.results.map(obj => Peli(obj));
    document.querySelector('.peliculasTendencia .peliculas').innerHTML = filas.join('');
}
/* llamarAPI(1); */

/* ------------------------------------------------- */

function Peli(obj) {
    return ` 
    <a href="#">
    <div div class="card">
        <div class="box">
            <div class="imgBox">
                <img class="imgTendencia" src="https://image.tmdb.org/t/p/w500/${obj.poster_path}" alt="${obj.title}"
                    loading="lazy">
            </div>
            <div class="contentBox">
                <div>
                    <h1>${obj.title}</h1>
                    <br>
                    <p>${'Puntuación : ' + obj.vote_average}</p>
                    <br>
                    <p>${'Estreno : ' + obj.release_date}</p>
                </div>
            </div>
        </div>
    </div>
</a>
`
        ;
}
/* ------------------------------------ */
/* function cargarPaginaSiguiente(){
    currnetPage++;
    llamarAPI(currnetPage);
}
function cargarPaginaAnterior(){
    if (currnetPage>1) {
        currnetPage--;
    llamarAPI(currnetPage);
    }
}
document.querySelector('.anterior').addEventListener('click', cargarPaginaAnterior);
document.querySelector('.siguiente').addEventListener('click', cargarPaginaSiguiente); */


llamarAPI(currnetPage)

/* ---------------- */


let titel = document.getElementById('title');
let Release_Year = document.getElementById('Release_Year');
let Genre = document.getElementById('Genre');
let Language = document.getElementById('Language');
let Runtime = document.getElementById('Runtime');
let TheStory = document.getElementById('TheStory');
let image_upload = document.getElementById('image_upload')
let submit =document.getElementById('submit');
let imgadd = document.getElementById('imgadd');
const filmSection = document.getElementById("film");



// Load stored films on page load
document.addEventListener("DOMContentLoaded", showFilm);


// upload image
image_upload.onchange = function uploadImage(){
    imgadd.src = URL.createObjectURL(image_upload.files[0]);
}

// Initialize localStorage array
let arrFilm = localStorage.getItem('film') ? JSON.parse(localStorage.getItem('film')) : [];



// create film 

// let arrFilm;
// if(localStorage.film != null){
//     arrFilm = JSON.parse(localStorage.film)
// }else{
//     arrFilm = [];
// }


submit.onclick = function(){
    let newFilm = {
        titel:titel.value,
        Release_Year:Release_Year.value,
        Genre:Genre.value,
        Language:Language.value,
        Runtime:Runtime.value,
        TheStory:TheStory.value,
        image_upload:imgadd.src,

    }
    arrFilm.push(newFilm);

//save licalstorage
    localStorage.setItem('film',JSON.stringify(arrFilm))

    clearData()

    showFilm()
}

//clear inputs

function clearData(){
    titel.value = '';
    Release_Year.value = '';
    Genre.value = '';
    Language.value = '';
    Runtime.value = '';
    TheStory.value = '';
    Runtime.value = '';
    imgadd.src = 'images/upload.png';
    image_upload.value = '';
    
}

//read films

function showFilm() {
    let filmList = '';
    let arrFilms = JSON.parse(localStorage.getItem('film')) || [];

    arrFilms.forEach((film, index) => {
        filmList += `
            <div class="film-item" id="film-${index}">
                <a href="info.html?index=${index}">
                    <img src="${film.image_upload}" alt="${film.titel}" width="100">
                    <h3>${film.titel}</h3>
                </a>
            </div>
        `;
    });

    filmSection.innerHTML = filmList;
}



//delete film

function deleteFilm(index) {
    let arrFilms = JSON.parse(localStorage.getItem('film')) || []; // Fetch the latest array from localStorage
    arrFilms.splice(index, 1);
    localStorage.setItem('film', JSON.stringify(arrFilms));
    showFilm(); // Refresh the list
}


//update film




//clean data
//search

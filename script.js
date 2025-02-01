
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



// console.log(titel,Release_Year,Genre,Language,Runtime,TheStory,image_upload,submit);

// upload image


image_upload.onchange = function uploadImage(){
    imgadd.src = URL.createObjectURL(image_upload.files[0]);
}



// create film 

let arrFilm;
if(localStorage.film != null){
    arrFilm = JSON.parse(localStorage.film)
}else{
    arrFilm = [];
}


submit.onclick = function(){
    let newFilm = {
        titel:titel.value,
        Release_Year:Release_Year.value,
        Genre:Genre.value,
        Language:Language.value,
        Runtime:Runtime.value,
        TheStory:TheStory.value,
        image_upload:image_upload.value, 
    }
    arrFilm.push(newFilm);

//save licalstorage
    localStorage.setItem('film',JSON.stringify(arrFilm))

    clearData()
    let filmList = '';
    arrFilm.forEach((film, index) => {
        filmList += `
            <div class="film-item" id="film-${index}">
                <img src="${film.image_upload}" alt="${film.titel}" width="100">
                <h3>${film.titel}</h3>
                <p><strong>Release Year:</strong> ${film.Release_Year}</p>
                <p><strong>Genre:</strong> ${film.Genre}</p>
                <p><strong>Language:</strong> ${film.Language}</p>
                <p><strong>Runtime:</strong> ${film.Runtime}</p>
                <p><strong>Story:</strong> ${film.TheStory}</p>
                <button onclick="deleteFilm(${index})">Delete</button>
                <button onclick="updateFilm(${index})">Update</button>
            </div>
        `;
    });
    filmSection.innerHTML = filmList;

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
    
}



//delete film
//update film
//clean data
//search

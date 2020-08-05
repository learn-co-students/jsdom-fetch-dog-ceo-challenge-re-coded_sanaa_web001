
document.addEventListener("DOMContentLoaded",(event)=>{
   console.log('%c HI', 'color: firebrick');
   let dogImageContainer = document.querySelector("#dog-image-container");
  fetchImages();
  fetchBreeds();
});//end of dom

///images fetch
function fetchImages(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(response => response.json())
  .then(json => displayImages(json.message));
}

function displayImages(images){
    dogImageContainer.innerHTML += images.map(showImage).join("")
  }
  function showImage(image){
    return `<img style ="display:flex; width:100px height 100px" src =${image}>`
  }

//end of images fetch
function fetchBreeds(){
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl);
  .then(response => response.json());
  .then(result => displayBreeds(result.message));
}

function displayBreeds(breeds){
   let breedList = document.querySelector("#dog-breeds");
   breedList.innerHTML+=breeds.map(showBreed).join("");

  }
}
function showBreed(breed){
  return `<li>${breed}</li>`
}

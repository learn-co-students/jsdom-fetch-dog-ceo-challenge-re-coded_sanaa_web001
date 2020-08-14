console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded',function(){
  
  fetchImg();
  fetchBreed();

})


function fetchImg(){
   const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl)
  .then(repo => repo.json())
  .then(json => createImg(json));
}

function createImg(imgs){
    // console.log(imgs);
    let divImg = document.getElementById('dog-image-container');
    imgs.message.forEach(img => {
        let newImg= document.createElement('img');
  newImg.src = img;
  divImg.appendChild(newImg);

    });
    
}

 function fetchBreed(){
   const breedUrl = 'https://dog.ceo/api/breeds/list/all';
   fetch(breedUrl)
   .then(repo => repo.json())
   .then(json =>{ createBreed(Object.keys(json.message)),filterBreeds(Object.keys(json.message))})
 }

function createBreed(breeds){
      // console.log(breeds);
  let ul = document.querySelector('#dog-breeds');
    breeds.forEach(breed => {
    let li = document.createElement('li');
  li.innerText = breed;
  li.style.cursor = 'pointer';
  li.addEventListener('click',(e) => {
   li.style.color = "blue";
  });
  ul.appendChild(li);
    })
}

function filterBreeds(b){
    let dropdown = document.querySelector('#breed-dropdown');
    dropdown.addEventListener('change',(e) => {
     document.getElementById('dog-breeds').innerHTML = '';
    let filterB = b.filter(breed => breed.startsWith(e.target.value))
  
      createBreed(filterB);
    })
}

console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = 'https://dog.ceo/api/breeds/list/all';

function fetchT(url,fuction){

  fetch(url)
    .then(resp => resp.json())
    .then(json => fuction(json));

}

 fetchT(imgUrl,renderimages);
 fetchT(breedUrl,renderBreed);

  function renderimages(images) {
  const div = document.querySelector('#dog-image-container')

  for (const element of images) {
      let img = document.createElement('img');
      img.src = element;
      div.appendChild(img);
  }

  function renderBreed(breeds) {
  const ul = document.querySelector('#og-breeds')

  for (const key in breeds) {
      let li = document.createElement('li');
      li.innerHTML = key;
      li.addEventListener("click", (e) => {
        li.style.fontColor = "#777";
      })
      div.appendChild(li);
  }

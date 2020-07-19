console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
fetch(imgUrl)
  .then(resp => resp.json())
  .then(json => renderBooks(json));

  function renderBooks(images) {
  const div = document.querySelector('#dog-image-container')

  for (const element of images) {
      let img = document.createElement('img');
      img.src = element;
        div.appendChild(img);
  }

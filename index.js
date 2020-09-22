function loadImages() {
  const img = "https://dog.ceo/api/breeds/image/random/4"
  fetch(img)
    .then(res=> res.json())
    .then(results => {results.message.forEach(img => addImage(img))
    });
}
function addImage(dog) {
  let cont = document.querySelector('#dog-image-container');
  cont.appendChild(img);
}

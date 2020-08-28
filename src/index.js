 console.log('%c HI', 'color: firebrick')

 document.addEventListener("DOMContentLoaded", () => {

     let dogImageContainer = document.getElementById("dog-image-container"),
         ul = document.getElementById("dog-breeds"),
         breedDropdown = document.getElementById("breed-dropdown");

     const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
     fetch(imgUrl)
         .then(response => response.json())
         .then(json => json.message.forEach(element => {
             let img = document.createElement("img");
             dogImageContainer.appendChild(img);
             img.setAttribute("src", element);
         }));

     const breedUrl = 'https://dog.ceo/api/breeds/list/all';
     fetch(breedUrl)
         .then(response => response.json())
         .then(json => {
             for (const key in json.message) {
                 let li = document.createElement("li");
                 let node = document.createTextNode(key);
                 li.appendChild(node);
                 ul.appendChild(li);
                 li.addEventListener("click", function () {
                     li.style.color = "red";
                 });
                 breedDropdown.addEventListener("change", () => {
                     if (breedDropdown.value !== li.innerText.charAt(0)) {
                         li.style.display = "none";
                     } else {
                         li.style.display = "inherit";
                     }
                 });
             }
         });
 });
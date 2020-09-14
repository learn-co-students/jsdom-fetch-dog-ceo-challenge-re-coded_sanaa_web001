// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
    //Dog Images
    fetchTheImages("https://dog.ceo/api/breeds/image/random/4",addDogImages);
    //Breed Images
    fetchTheImages("https://dog.ceo/api/breeds/image/random/4",addBreedsImages);
    addFilterEvent();

  });
  function fetchTheImages(url , func){
      fetch(url)
      .then(par=>par.json())
      .then(json=>func(json));
  
  }
//#region  for challenge 1 : fetching  cat images 
  
function addDogImages(img){
    
    img.message.forEach(element => {
        
        let image=document.createElement("img");
        image.src=element;
        document.getElementById("dog-image-container").appendChild(image)
    });

}
//#endregion
//#region challenge 2 
function addBreedsImages(img){

    img.message.forEach(element => {
        
        let image=document.createElement("img");
        image.src=element;
        let imgli=document.createElement("li");
        imgli.appendChild(image);
        document.getElementById("dog-breeds").appendChild(imgli)
    });
//challenge 3
    let clickableLi=document.querySelectorAll("#dog-breeds li");
    clickableLi.forEach(element => {
        element.addEventListener("click",function(){
            this.style.color="red";
        });
    });

  

}
function addFilterEvent(){
  let breeds=[];
  
}

//#endregion
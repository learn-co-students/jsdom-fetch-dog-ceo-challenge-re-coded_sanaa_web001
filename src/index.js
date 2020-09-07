console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContenetLoaded',function(e){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
  fetch(imgUrl).then((response)=>response.json()).then((data)=>{
    data.forEach((image)=>
    { console.log(image);
      document.getElementById("dog-image-container").appendChild(document.createElement("img").setAttribute("src",image));
      
    })
  });
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl).then((res)=>res.json()).then((data)=>{
     for(breed in data)
    { console.log(breed);
    let breedsElement=document.createElement("li");
    breedsElement.innerHTML=breed;
      document.getElementById("dog-breeds").appendChild(breedsElement);
      
    }
  })
});
// for(el of document.getElementsByTagName("li")){
  el.addEventListener('click',()=>{
    el.style.color='pink';
  });
}
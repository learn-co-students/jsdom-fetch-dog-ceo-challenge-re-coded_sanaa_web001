document.addEventListener("DOMContentLoaded",(event)=>{
  // console.log('%c HI', 'color: firebrick');

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

const breedUrl = 'https://dog.ceo/api/breeds/list/all';

const dropDownList=document.getElementById("breed-dropdown");

dropDownList.addEventListener("change",(e)=>{
  // alert(dropDownList.value);
  fetchList(dropDownList.value);
});


function fetchImages() {
    // fetch(imgUrl).then(Response =>Response.json()).then(json => handleImages(json))
    // .then(resp => resp.json())
    // .then(json => renderBooks(json));
    fetch(imgUrl)
  .then(response => response.json())
  .then(data =>  data.message.forEach(image => handleImages(image)));
  }

  function fetchList(condition="") {
    let container = document.getElementById('dog-breeds');
    container.innerHTML="";
    
    fetch(breedUrl)
  .then(response => response.json())
  .then(data => (Object.keys(data.message)).forEach(el =>{
    if(condition==="")
    handleList(el)
    else{
      if(el[0]==condition){
        handleList(el);
      }
    }
  }
  
    
    ));
  
    // var ul = document.getElementById("dog-breeds");

    // var listItems = ul.getElementsByTagName("li");
    // console.log(listItems.length);
    // console.log(listItems[0][])
  }
  
  
  function handleImages(url){
    let container = document.getElementById('dog-image-container');
    // alert(container);
    let newImageEl = document.createElement('img');
    newImageEl.src = url;
    container.appendChild(newImageEl);
  }  
  
  function handleList(content){
    
    let container = document.getElementById('dog-breeds');
    
    // alert(container);
    let newListITem = document.createElement('li');
    
    newListITem.innerHTML = content;
    newListITem.addEventListener("click",(e)=>{
      // alert(e);
      if(!newListITem.classList.contains("clicked")){
        newListITem.classList.add("clicked");
      }else{
        newListITem.classList.remove("clicked");
      }
  

      // e.classList.add("clicked");
      // alert("hello");
    });
    container.appendChild(newListITem);
    // newListITem.style.hover.styleSheet.cssText="li:hover{color:red;}";
  }
 
 
//   console.log(fetchImages());
//   function renderBooks(books) {
//     const main = document.querySelector('main');
//     books.forEach(book => {
//       const h2 = document.createElement('h2');
//       h2.innerHTML = book.name;
//       main.appendChild(h2);
//     })
//   }
  

    fetchImages();
    fetchList();
})
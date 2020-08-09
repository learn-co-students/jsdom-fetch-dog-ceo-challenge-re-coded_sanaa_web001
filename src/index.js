document.addEventListener('DOMContentLoaded', function() {
  
  console.log('%c HI', 'color: firebrick');
  const imgUrl =  "https://dog.ceo/api/breeds/image/random/4";
  const breedUrl = 'https://dog.ceo/api/breeds/list/all';
  let selectTag = document.getElementById('breed-dropdown');
  let re = new RegExp('^' + selectTag.value);
  fetch(imgUrl)
    .then(response => response.json())
    .then(function(json) {
      console.log(json);
      for(const img of json.message) {
        addElement(
          'img',
          document.getElementById('dog-image-container'),
          'img-tag'
          )
            .setAttribute('src', img);
      }
      
    });
    
    fetch(breedUrl)
    .then(breadResponse => breadResponse.json())
    .then(function(json) {
      console.log(json.message);
      for(const bread in json.message) {
          if(re.test(bread)) {
          addElement(
            'li',
            document.getElementById('dog-breeds'),
            'bread-li',
            ''
            ).innerHTML = bread;
          }
      }
      
        let dogBreads = document.getElementById('dog-breeds');
          console.log(dogBreads);
          document.getElementById('breed-dropdown').addEventListener('change', function(e) {
          let reOnChange = new RegExp('^' + e.target.value);
          dogBreads.innerHTML = '';
          for(const bread in json.message) {
          if(reOnChange.test(bread)) {
          addElement(
            'li',
            document.getElementById('dog-breeds'),
            'bread-li',
            ''
            ).innerHTML = bread;
          }
      }
      
    });
      
    }).then(function(json) {
         let lis = document.getElementsByTagName('li');
         let lisKeys = Object.keys(lis);
         console.log(lisKeys);
          for(const item of lisKeys) {
            lis[item].addEventListener('click', function(e) {
              e.target.style.color = 'red';
            });
            
          }
          
        
    });
   
});

function addElement(element, parent, givenId) {
  let tag = document.createElement(element);
  tag.setAttribute('id', givenId);
  return parent.appendChild(tag);
}

const mainElement = document.getElementById('main');
if (mainElement){
  mainElement.parentNode.removeChild(mainElement);
} 

const newHeader = document.createElement('h1');
newHeader.textContent = "Matt is the champion";
newHeader.id= "victory";

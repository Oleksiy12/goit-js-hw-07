import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector(".gallery");

const galleryAllValue =  galleryItems.map(({preview, original, description}) =>
`<li class ="gallery__item"
<a class="gallery__link" href="${original}">
<img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"/>
</a>
</li>`).join('');

gallery.insertAdjacentHTML("beforeend", galleryAllValue);
gallery.addEventListener("click", modalWindow);

function modalWindow(event){
event.preventDefault();

const currentItem = event.target;

if(currentItem.nodeName !== "IMG"){
    return;
} 

const instance = basicLightbox.create(
    `<img src="${currentItem.getAttribute(
      "data-source"
    )}" alt="${currentItem.getAttribute("alt")}" />`
  );
instance.show()

    }
    

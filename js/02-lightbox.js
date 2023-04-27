import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const galleryItem = galleryItems.map(({preview, original, description}) => 
    `<li class = "gallery__item"><a class="gallery__link" href="${original}">
    <img class ="gallery__image" src="${preview}" alt="${description}"/>
    </a>
    </li>`).join("");

    gallery.insertAdjacentHTML("beforeend", galleryItem);
    gallery.addEventListener("click", onModalClick);

    function onModalClick(event){
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
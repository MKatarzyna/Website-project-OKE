import partOfTheBody from '../assets/treatments.js';
import { addTreatmentToStorage } from './treatments_storage.js';

const section = document.querySelector('.tips');

const createTitleElement = (part, title) => {
  const cardTitleElement = document.createElement('h1');
  cardTitleElement.textContent = `${part} (${title})`
  return cardTitleElement;
}

const createPhoto = (imgUrl) => {
  const image = document.createElement('img');
  // ('src' `./assets/${imgUrl}`)  // 'src' `imgUrl="https://www.placecage.com/400/400")
  image.setAttribute('src', imgUrl="https://www.placecage.com/400/400");
  image.classList.add('tips_photo');
  return image;
}

const createDescription = (methodOfPreparing) => {
  const cardDescription = document.createElement('p');
  cardDescription.textContent = methodOfPreparing;
  cardDescription.classList.add('tips_description');
  return cardDescription;
}

const createFavoriteButton = (onClickFn, id) => {
  const button = document.createElement('button');
  button.textContent = "Like";
  button.id = "button" + id;
  button.classList.add('like_button');
  button.onclick = onClickFn;
  return button;
}

const treatmentsCardElements = partOfTheBody.map(partOfTheBody => {
  const treatmentsWrapper = document.createElement('div');
  
  treatmentsWrapper.setAttribute('class', 'treatments_wrapper');
  treatmentsWrapper.appendChild(createTitleElement(partOfTheBody.part, partOfTheBody.title));
  treatmentsWrapper.appendChild(createPhoto(partOfTheBody.cover));
  treatmentsWrapper.appendChild(createDescription(partOfTheBody.methodOfPreparing));

  treatmentsWrapper.appendChild(createFavoriteButton(
    () => addTreatmentToStorage(partOfTheBody.id), partOfTheBody.id));

  return treatmentsWrapper;
});

treatmentsCardElements.forEach(element => section.appendChild(element));
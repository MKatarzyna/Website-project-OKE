import {getTreatmentsFromStorage, removeTreatmentsFromStorage} from './treatments_storage.js';

const list = document.querySelector('.library') ;

const buildLibrary = () => {
    const favoriteTips = getTreatmentsFromStorage();

    const listItemElements = favoriteTips.map(tips => {
        const listItem = document.createElement('li');
        listItem.classList.add('fav_item');
        const title = document.createElement('p');

        const button = document.createElement('button');
        button.textContent = "Dislike";
        button.classList.add('dislike_button');
        button.onclick = () => {
            removeTreatmentsFromStorage(tips.id);

            while(list.firstChild) {
                list.removeChild(list.firstChild); 
            }

            buildLibrary();
        };

        title.textContent = tips.title;

        listItem.appendChild(title);
        listItem.appendChild(button);
        return listItem;
    });

    listItemElements.forEach(item => {
        list.appendChild(item);
    });
}

buildLibrary();

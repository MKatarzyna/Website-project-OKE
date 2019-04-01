import partOfTheBody from '../assets/treatments.js';

const STORAGE_KEY = "treatments";

export const addTreatmentToStorage = id => {
    const treatmentToAdd = partOfTheBody.find(treatment => treatment.id == id);
    const treatmentsInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if(treatmentsInStorage) {
        treatmentsInStorage.push(treatmentToAdd);

        let x = (treatmentsInStorage) => treatmentsInStorage.filter((v,i) => treatmentsInStorage.indexOf(v) === i)
        x(treatmentsInStorage);

        // let unique = [...new Set(treatmentToAdd)];
        // console.log(unique);

        localStorage.setItem(STORAGE_KEY, JSON.stringify(treatmentsInStorage));
    } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([treatmentToAdd]));
    }
}

export const getTreatmentsToStorage = () => {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return dataStorage;
}

export const removeTreatmentsToStorage = (id) => {
    const treatsOutFromStorage = getTreatmentsToStorage();
    const treatmentsNewArray = treatsOutFromStorage.filter(tips => tips.id != id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(treatmentsNewArray));

}

// removeTreatmentsToStorage(2);
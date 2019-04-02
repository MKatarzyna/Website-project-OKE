import partOfTheBody from '../assets/treatments.js';

const STORAGE_KEY = "treatments";

export const addTreatmentToStorage = id => {
    const treatmentToAdd = partOfTheBody.find(treatment => treatment.id == id);
    const treatmentsInStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    
    if(treatmentsInStorage) {
        treatmentsInStorage.push(treatmentToAdd);
        
        var seenNames = {};
        const treatmentsWithoutDuplicatesArray = treatmentsInStorage.filter(function(currentObject) {
            if (currentObject.id in seenNames) {
                return false;
            } else {
                seenNames[currentObject.id] = true;
                return true;
            }
        });

        console.log(id);
        document.getElementById("button" + id).textContent = "Liked!!";

        console.log(treatmentsWithoutDuplicatesArray);
        
        localStorage.setItem(STORAGE_KEY, JSON.stringify(treatmentsWithoutDuplicatesArray));
    } else {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([treatmentToAdd]));
    }
}

export const getTreatmentsFromStorage = () => {
    const dataStorage = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return dataStorage;
}

export const removeTreatmentsFromStorage = (id) => {
    const treatsOutFromStorage = getTreatmentsFromStorage();
    const treatmentsNewArray = treatsOutFromStorage.filter(tips => tips.id != id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(treatmentsNewArray));

}
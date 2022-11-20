const birthDate = new Date(2021,10,2,14,56,0,0); 
const birthStamp = birthDate.getTime();
const ageCounter = document.querySelector("#age-counter");

function updateCounter() {
    const newDate = new Date();
    const newStamp = newDate.getTime();
    let diff = Math.round((newStamp-birthStamp)/1000);
    
    const months = Math.floor(diff/(30.43*24*60*60));
    diff = diff - (months*30.43*24*60*60);
    const days = Math.floor(diff/(24*60*60));
    diff = diff - (days*24*60*60);
    const hours = Math.floor(diff/(60*60));
    diff = diff - (hours*60*60);
    const minutes = Math.floor(diff/(60));
    diff = diff - (minutes*60);
    const seconds = Math.floor(diff);
    
    ageCounter.innerHTML = months + " months " + days+" days, " + hours + " hours, " + minutes + " minutes and " + seconds+ " seconds old";
};

setInterval(updateCounter, 1000);
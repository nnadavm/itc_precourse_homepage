const langArray = ['HTML', 'CSS', 'Javascript'];
const arrayJoin = langArray.slice(0, -1).join(", ");
const footer = document.querySelector("footer");

footer.innerHTML = "This website has been created with: " + arrayJoin + " and " + langArray[langArray.length - 1];


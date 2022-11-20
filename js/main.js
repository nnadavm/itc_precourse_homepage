const GITHUB_URL = "https://api.github.com/users/nnadavm";
const profileButton = document.querySelector("#profile-image");
profileButton.style.cursor = "pointer";
const card = document.querySelector(".card");
const cardBottom = document.querySelector(".icons");
const body = document.querySelector("body");
const colorArray = [
  "#E5F3E4",
  "#EDCCE9",
  "#F4C9C6",
  "#F9D082",
  "white",
  "#DDEAF2",
  "#F8BA84",
  "#FAEAD6"
];


fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    const profileName = document.getElementById("profile-name");
    profileImage.src = data.avatar_url;
    profileName.innerHTML = data.name;
  });

  function changeColors() {
    const color1 = colorArray[Math.floor(Math.random() * (colorArray.length))];
    const color2 = colorArray[Math.floor(Math.random() * (colorArray.length))];
    const color3 = colorArray[Math.floor(Math.random() * (colorArray.length))];
    localStorage.setItem("color1", color1);
    localStorage.setItem("color2", color2);
    localStorage.setItem("color3", color3);
    card.style.backgroundColor = color1;
    cardBottom.style.backgroundColor = color2;
    body.style.backgroundColor = color3;
  };
  
  function changeColorsOnLoad() {
    if (localStorage.getItem("color1") === null) {
        return
    } else {
      card.style.backgroundColor = localStorage.getItem("color1");
      cardBottom.style.backgroundColor = localStorage.getItem("color2");
      body.style.backgroundColor = localStorage.getItem("color3");
    }
}
  
  profileButton.addEventListener("click", function() {
    changeColors();
  });
  
  
  function init() {
    // prevent animation at page load: 
    setTimeout(function(){
      document.body.className="";
    },500);

    changeColorsOnLoad();   
}

init();




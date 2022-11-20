const map = document.getElementById("iframe");
let currentCity = 0;
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const body = document.querySelector("body");

function enable(button) {
    button.disabled = false;
    button.style.cursor = "pointer";
    button.style.border = "1.5px #333333 solid";
    button.style.pointerEvents = "auto";
}

function disable(button) {
    button.disabled = true;
    button.style.cursor = "";
    button.style.border = "1.5px lightgray solid";
    button.style.pointerEvents = "none";
}

nextBtn.addEventListener('click', function(){
    currentCity ++
    map.src = citiesArray[currentCity].URL;

    if (currentCity === citiesArray.length - 1) {
        disable(nextBtn);
    }

    if (currentCity === 0) {
        disable(prevBtn)
    } else if (currentCity === 1) {
        enable(prevBtn)
    }
});

prevBtn.addEventListener('click', function(){
    currentCity --
    map.src = citiesArray[currentCity].URL;

    if (currentCity === citiesArray.length - 1) {
        disable(nextBtn);
    } else if (currentCity === citiesArray.length - 2) {
        enable(nextBtn);
    }

    if (currentCity === 0) {
        disable(prevBtn);
    } 
});

function changeColorsOnLoad() {
    if (localStorage.getItem("color1") === null) {
        return
    } else {
        body.style.backgroundColor = localStorage.getItem("color3");
    }
}

function init() {
    enable(nextBtn);
    disable(prevBtn);
    changeColorsOnLoad();
}

init();

// cities aray:

let citiesArray = [
    {city: "Tel Aviv",
    URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.95711462208!2d34.72548849627867!3d32.0879112763345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1663845450308!5m2!1sen!2sil"
    },

    {city: "Berlin",
    URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d310846.4201556515!2d13.144553147592072!3d52.506513269399925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84e373f035901%3A0x42120465b5e3b70!2sBerlin%2C%20Germany!5e0!3m2!1sen!2sil!4v1663828025291!5m2!1sen!2sil"
    },

    {city: "Hanoi",
    URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29793.988390093782!2d105.8194541418893!3d21.022738704096586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSGFub2ksIFZpZXRuYW0!5e0!3m2!1sen!2sil!4v1663845305279!5m2!1sen!2sil"
    },

    {city: "Cape Town",
    URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d423808.8888020482!2d18.375885766713303!3d-33.9152208603622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town%2C%20South%20Africa!5e0!3m2!1sen!2sil!4v1663846391590!5m2!1sen!2sil"
    },

    {city: "Bali",
    URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252572.86380847503!2d114.93149462343567!3d-8.455446493900446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd141d3e8100fa1%3A0x24910fb14b24e690!2sBali%2C%20Indonesia!5e0!3m2!1sen!2sil!4v1663846493426!5m2!1sen!2sil"
    },

    {city: "Agra",
    URL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56789.887089845106!2d77.94499365661754!3d27.17617015171809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sil!4v1663846572599!5m2!1sen!2sil"
    }
];



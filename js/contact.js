const submitBtn = document.querySelector(".submitBtn");
const form = document.querySelector("form");
const body = document.querySelector("body");


function enable(button) {
  button.disabled = false;
  button.style.cursor = "pointer";
  button.style.border = "1.5px #333333 solid"
  button.style.pointerEvents = "auto";
} 

function disable(button) {
  button.disabled = true;
  button.style.cursor = "";
  button.style.border = "1.5px #b2b0b0 solid";
  button.style.pointerEvents = "none";
} 

function validateForm() {
  if (document.forms["myForm"]["first-name"].value !== ""
  &&
  document.forms["myForm"]["email"].value !== "" 
  &&
  document.forms["myForm"]["message"].value !== ""
  &&
  document.forms["myForm"]["pets"].value !== "noSelection") {
    enable(submitBtn);
  } else {
    disable(submitBtn);
  }
}

form.addEventListener("change", function() {
    validateForm();
});

function changeColorsOnLoad() {
  if (localStorage.getItem("color1") === null) {
      return
  } else {
      body.style.backgroundColor = localStorage.getItem("color3");
  }
}

function init() {
  disable(submitBtn);
  // prevent animation at page load: 
    setTimeout(function(){
      document.body.className="";
  },500);
  changeColorsOnLoad();
}
  init();
  
// prevent animation at page load different method (not working): 
//   document.addEventListener("DOMContentLoaded", function() {
//     document.body.className = "";
//     console.log("dom loaded");
//   })

const popUpContents = document.querySelector(".sharesymbol");
const popUp = document.querySelector("ul");
const popUpArrow = document.querySelector("span");
const popUpContents_2 = document.querySelector(".thirdrightshare");
//const hideLetters = document.getElementById("roro");
//const hideLetters_2 = document.getElementById("gogo");
var x = window.matchMedia("(max-width: 800px)");
mediaQuery(x);
x.addListener(mediaQuery);

//adding event listeners
popUpContents.addEventListener("mouseenter", myShowFunction);
popUpContents.addEventListener("mouseleave", myHideFunction);
popUpContents_2.addEventListener("mouseenter", myShowFunction);
popUpContents_2.addEventListener("mouseleave", myHideFunction);

function myShowFunction() {
  popUp.style.visibility = "visible";
  popUpArrow.style.visibility = "visible";
  //hideLetters.style.visibility = "hidden";
  //hideLetters_2.style.visibility = "hidden";
}

function myShowFunction_2() {
  popUp.style.visibility = "visible";
  popUpArrow.style.visibility = "visible";
  //hideLetters.style.visibility = "visible";
  //hideLetters_2.style.visibility = "visible";
}

function myHideFunction_2() {
  popUp.style.visibility = "hidden";
  popUpArrow.style.visibility = "hidden";
  //hideLetters.style.visibility = "visible";
  //hideLetters_2.style.visibility = "visible";
}

function myHideFunction() {
  popUp.style.visibility = "hidden";
  popUpArrow.style.visibility = "hidden";
  //hideLetters.style.visibility = "visible";
  //hideLetters_2.style.visibility = "visible";
}

function mediaQuery(x) {
  if (!x.matches) {
    popUpContents.addEventListener("mousedown", myShowFunction_2);
    popUpContents.addEventListener("mouseup", myShowFunction_2);
    popUpContents.addEventListener("mouseenter", myShowFunction_2);
    popUpContents.addEventListener("mouseleave", myHideFunction);
  }
}

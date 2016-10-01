var welcome = document.getElementById("home");
welcome.style.transition = "opacity 3s";

var mainPage = document.getElementById("main");
mainPage.style.transition = "opacity 3s";

function fade() {
  welcome.style.opacity = 0;
  welcome.style.zIndex = -1;
  mainPage.style.display = "initial";
  mainPage.style.opacity = 1;
}

function unfade () {
  welcome.style.opacity = 1;
  welcome.style.zIndex = 1;
  page1.style.opacity = 0;
}

var hButton = document.getElementById("homeButton");
hButton.addEventListener("click", fade);

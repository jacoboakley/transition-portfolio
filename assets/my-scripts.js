var welcome = document.getElementById("home");
welcome.style.transition = "opacity 4s";

var mainPage = document.getElementById("main");
mainPage.style.transition = "opacity 4s";

var hText = document.getElementById("homeText");
hText.style.transition = "opacity 4s";

function fade() {
  welcome.style.opacity = 0.5;
  welcome.style.zIndex = -1;
  mainPage.style.display = "initial";
  mainPage.style.opacity = 1;
  hText.style.opacity = 0;
}

function unfade () {
  welcome.style.opacity = 1;
  welcome.style.zIndex = 1;
  page1.style.opacity = 0;
  hText.style.display = "initial";
}

var hButton = document.getElementById("homeButton");
hButton.addEventListener("click", fade);

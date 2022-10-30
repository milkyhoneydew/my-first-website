window.onload = function() {
  let lightBtn = document.getElementById("lightBtn");
  lightBtn.onclick = function() {
    document.querySelector("body").style.backgroundColor = "pink";
    document.querySelector("body").style.color = "black";
  };

  let darkBtn = document.getElementById("darkBtn");
  darkBtn.onclick = function() {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  };

  let defaultFontBtn = document.getElementById("defaultFontBtn");
  defaultFontBtn.onclick = function() {
    document.querySelector("body").style.fontSize = "initial";
  };

  let bigFontBtn = document.getElementById("bigFontBtn");
  bigFontBtn.onclick = function() {
    document.querySelector("body").style.fontSize = "xx-large";
  };
};
window.onload = function() {
  let lightBtn = document.getElementById("lightBtn");
  lightBtn.onclick = function() {
    document.querySelector("body").style.backgroundColor = "neongreen";
    document.querySelector("body").style.color = "black";
  };

  let darkBtn = document.getElementById("drkBtn");
  darkBtn.onclick = function() {
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("body").style.color = "white";
  };
};
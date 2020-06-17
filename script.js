var body = document.getElementById("gradient");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var h5 = document.querySelector("h5");

color1.addEventListener("input", changeBG)
color2.addEventListener("input", changeBG)
color3.addEventListener("input", changeBG)

function changeBG() {
	body.style.background = "linear-gradient(to right, "
	 + color1.value + ", " 
	 + color2.value + ", "
	 + color3.value + ")";
	h5.innerHTML = body.style.background + ";";
}
// Global variables
var canvas = document.querySelector("canvas");
var context = canvas.getContext("2d");

// Canvas helper functions
function drawImage(image, x, y, w, h) {
	var imageObj = new Image();
	imageObj.onload = function() {
    	context.drawImage(imageObj, x, y, w, h);
  	}
  	imageObj.src = image;
}

// Game specific functions
function makeBase() {
  	// drawImage('alien.jpeg', 0, 0, 100, 100);
}

// Event listeners
document.querySelector("#playButton").addEventListener("click", function() {
	document.querySelector("canvas").style.display = "block";
});

// Initial execution
makeBase();

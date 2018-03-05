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
  	// drawImage('https://preview.ibb.co/hV2utx/imageedit_1_3612881068.png', 0, 0, 100, 100);
}

// Event listeners
document.querySelector("#playButton").addEventListener("click", function() {
	document.querySelector("canvas").style.display = "block";
});

// Initial execution
makeBase();

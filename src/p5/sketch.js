function preload() {

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240, 255, 120);

}



function draw() {

}




//// Save image function ////
// Saves a picture of the canvas when the "s" key is pressed
function keyTyped() {
    if (key === 's') {
        saveCanvas('myCanvas' + hour() + minute() + second() + '-' + frameCount, 'png');
  }
}
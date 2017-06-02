var message = "ADSR",
  font,
  bounds, // holds x, y, w, h of the text's bounding box
  fontsize = 60,
  x, y; // x and y coordinates of the text

function preload() {
  font = loadFont('fonts/GreatVibes-Regular.ttf');
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2 - bounds.w / 2;
  y = height / 2 - bounds.h / 2;
}

function draw() {
  // instead of clearing the background, fade it by drawing
  // a semi-transparent rectangle on top
  fill(random(110,200), random(120,159), random(123,200));
  rect(0, 0, width, height);

  // write the text in black and get its bounding box
  fill(255,100+random(50),212+random(50));
  text(message, x, y);
  bounds = font.textBounds(message,x,y,fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds.x && mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y && mouseY <= bounds.y + bounds.h) {
    x += random(-5, 5);
    y += random(-5, 5);
  }
}

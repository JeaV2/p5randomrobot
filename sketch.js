function setup() {
  createCanvas(700, 500);
  drawEnvironment();
  drawRobot();
  angleMode(DEGREES);
}

function draw() {

  // Draw left eye

  let leftX = 375;
  let leftY = 125;

  // Calculate angle between left eye and mouse
  let leftAngle = atan2(mouseY - leftY, mouseX - leftX);

  push();
  translate(leftX, leftY);
  fill(255);
  ellipse(0, 0, 25, 25);
  rotate(leftAngle);
  fill(0);
  ellipse(7, 0, 10, 10);
  pop();

  // Draw right eye

  let rightX = 325;
  let rightY = 125;

  // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - rightY, mouseX - rightX);

  push();
  translate(rightX, rightY);
  fill(255);
  ellipse(0, 0, 25, 25);
  rotate(rightAngle);
  fill(0);
  ellipse(7, 0, 10, 10);
  pop();
}

function drawRobot() {
  push();
  stroke(0);
  // Antennae
  fill(randomColor());
  rect(330, 80, 5, 20);
  fill(randomColor());
  ellipse(332.5, 80, 10, 10);
  //Head
  fill(randomColor());
  rect(300, 100, 100, 100);
  // Mouth
  fill(255, 0, 0);
  rect(325, 180, 50, 10);
  rect(320, 175, 10, 10);
  rect(370, 175, 10, 10);
  //Body
  fill(randomColor());
  rect(300, 200, 100, 150);
  //Arms
  fill(randomColor());
  rect(200, 200, 100, 20);
  rect(400, 200, 100, 20);
  //Legs
  fill(randomColor());
  rect(300, 350, 20, 50);
  rect(380, 350, 20, 50);
  // chest
  fill(randomColor());
  ellipse(350, 230, 95, 40);
  //Feet
  fill(randomColor());
  rect(290, 400, 40, 20);
  rect(370, 400, 40, 20);
}
function drawEnvironment() {
  noStroke();
  //Ground
  fill("#00FF00");
  rect(0, 400, 700, 100);
  //Sky
  fill("#87CEEB");
  rect(0, 0, 700, 400);
  //Sun
  fill("#FFFF00");  
  ellipse(600, 100, 100, 100);
  // Cloud
  push();
  fill(255, 255, 255, 200);
  for (let i = 0; i < 5; i++) {
    let cloudX = random(0, width - 50); // Random X position
    let cloudY = random(25, 150); // Random Y position
    ellipse(cloudX, cloudY, 50, 50);
    ellipse(cloudX + 25, cloudY - 10, 50, 50);
    ellipse(cloudX + 25, cloudY + 10, 50, 50);
    ellipse(cloudX + 50, cloudY - 10, 50, 50);
    ellipse(cloudX + 50, cloudY + 10, 50, 50);
    ellipse(cloudX + 75, cloudY, 50, 50);
  }
  // Tree
  let treeX = random(0, width - 40);
  fill("#8B4513");
  rect(treeX, 195, 50, 205);
  fill("#228B22");
  ellipse(treeX+25, 100, 200, 200);
  // Tree
  let tree2X = random(0, width - 40);
  fill("#8B4513");
  rect(tree2X, 195, 50, 205);
  fill("#228B22");
  ellipse(tree2X+25, 100, 200, 200);

  // Grass
  fill("#228B22");
  let grass1X = random(0, width - 40);
  let grass2X = random(0, width - 40);
  let grass3X = random(0, width - 40);
  let grass4X = random(0, width - 40);
  let grass5X = random(0, width - 40);
  for (let i = 0; i < 5; i++) {
    rect(grass1X + i * 7, 380, 5, 20);
  }
  for (let i = 0; i < 5; i++) {
    rect(grass2X + i * 7, 380, 5, 20);
  }
  for (let i = 0; i < 5; i++) {
    rect(grass3X + i * 7, 380, 5, 20);
  }
  for (let i = 0; i < 5; i++) {
    rect(grass4X + i * 7, 380, 5, 20);
  }
  for (let i = 0; i < 5; i++) {
    rect(grass5X + i * 7, 380, 5, 20);
  }
}

function randomColor() {
  return color(random(255), random(255), random(255));
}
function setup() {
  createCanvas(600, 400);
}

function draw() {
  background('skyblue');
  
  //sun
  fill ('yellow')
  circle(250,100,100)
  
  
  //mountain
  fill ('gray')
  triangle (330,250,170,75,0,250)
  triangle (600,250,370,75,200,250)
  
  //road
  fill ('black')
  rect (0,250,600,200)
  fill ('white')
  rect (330,315,70,20)
  rect (215,315,70,20)
  rect (100,315,70,20)
  rect (445,315,70,20)
  rect (550,315,70,20)
  rect (-15,315,70,20)
  fill ('lightgray')
  rect (0,240,700,10)
  
  //bird
  textSize(20)
  text ('🦅', 175, 75)
  text ('🦅', 330, 150)
}
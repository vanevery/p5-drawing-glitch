var lines = [];
var clearbutton;

function setup() { 
  createCanvas(400, 400);
  clearbutton = createButton("No Fun");
  clearbutton.mousePressed(doClear);
  setInterval(getLines,2000);
} 

function doClear() {
  httpGet('/clear');
}

function draw() { 
  background(220);
  for (var i = 1; i < lines.length; i++)
  {
    line(lines[i-1].x, lines[i-1].y, lines[i].x, lines[i].y);
  }
}

function mousePressed() {
	var line = {x: mouseX, y: mouseY};
  //lines.push(line);
  httpGet("/newline?x=" + mouseX + "&y=" + mouseY);
}

function getLines() {
  httpGet("/lines","json",gotLines);
}

function gotLines(newlines) {
  console.log(newlines);
  lines.length = 0;
  for (var i = 0; i < newlines.length; i++) {
    lines.push(newlines[i]);
  }
}
const LIMIT = 1
const RATE = 0.7
const ANGLE = Math.PI / 8
let lineCount = 0

function setup() {
  createCanvas(800, 800);
  background(220);
  let y = 180;
  translate(400, 800);

  function branch(y){
    if (y < LIMIT) {
      return
    }
    stroke(lineCount * 2)
    lineCount++
    line(0, 0, 0, -y);
    translate(0, -y);
    text(lineCount, 0, 0)
    // console.log(sw);

    push()
    rotate(ANGLE);
    branch(y * RATE)
    pop()
    

    push()
    rotate(-ANGLE);
    branch(y * RATE)
    pop()

  }

  branch(y);
}




import { Screen, Turtle } from 'turtle-graphics';
import { sleep } from 'utils';
import { random } from 'math';

const delay = 0.1;
const bodySegments = [];
let score = 0;
let highScore = 0;

const window = new Screen();
window.title('Jueguito serpientita');
window.setup(600, 600);
window.bgcolor('dark grey');

// lapitoncabezuda
const head = new Turtle();
head.speed(6);
head.shape('square');
head.penup();
head.color('dark green');
head.goto(0, 0);
head.direction = 'stop';

// Sucomiditarica
const food = new Turtle();
food.speed(0);
food.shape('square');
food.color('red');
food.penup();
food.goto(0, 80);
food.direction = 'stop';

// 100puntosparagriffindor
const text = new Turtle();
text.speed(0);
text.color('white');
text.penup();
text.hideturtle();
text.goto(0, 250);
text.write(`Score: 0      High Score: 0`, { align: 'center', font: ['Impact', 24] });

function move() {
  if (head.direction === 'up') {
    head.sety(head.ycor() + 20);
  } else if (head.direction === 'down') {
    head.sety(head.ycor() - 20);
  } else if (head.direction === 'right') {
    head.setx(head.xcor() + 20);
  } else if (head.direction === 'left') {
    head.setx(head.xcor() - 20);
  }
}

function dirUp() {
  head.direction = 'up';
}

function dirDown() {
  head.direction = 'down';
}

function dirRight() {
  head.direction = 'right';
}

function dirLeft() {
  head.direction = 'left';
}

window.listen();
window.onkeypress(dirUp, 'w');
window.onkeypress(dirDown, 's');
window.onkeypress(dirLeft, 'a');
window.onkeypress(dirRight, 'd');

while (true) {
  window.update();

  // Chocaste pa
  if (
    head.xcor() > 280 ||
    head.xcor() < -280 ||
    head.ycor() > 280 ||
    head.ycor() < -280
  ) {
    sleep(1);
    head.goto(0, 0);
    head.direction = 'stop';

    for (const segment of bodySegments) {
      segment.goto(1000, 1000);
    }

    bodySegments.length = 0;
    score = 0;
    text.clear();
    text.write(`Score: ${score}      High Score: ${highScore}`, {
      align: 'center',
      font: ['Impact', 24],
    });
  }

  // Lecrecelatula
  if (head.distance(food) <= 20) {
    const x = random(-275, 275);
    const y = random(-275, 275);
    food.goto(x, y);
    const newSegment = new Turtle();
    newSegment.speed(0);
    newSegment.shape('square');
    newSegment.color('light green');
    newSegment.penup();
    newSegment.goto(0, 0);
    bodySegments.push(newSegment);
    score += 10;

    if (score > highScore) {
      highScore = score;
    }

    text.clear();
    text.write(`Score: ${score}      High Score: ${highScore}`, {
      align: 'center',
      font: ['Impact', 24],
    });
  }

  const totalSeg = bodySegments.length;

  for (let i = totalSeg - 1; i > 0; i--) {
    const x = bodySegments[i - 1].xcor();
    const y = bodySegments[i - 1].ycor();
    bodySegments[i].goto(x, y);
  }

  if (totalSeg > 0) {
    const x = head.xcor();
    const y = head.ycor();
    bodySegments[0].goto(x, y);
  }

  move();

  // te comiste la cola
  for (const segment of bodySegments) {
    if (segment.distance(head) < 10) {
      sleep(1);
      head.goto(0, 0);
      head.direction = 'stop';

      for (const segment of bodySegments) {
        segment.goto(1000, 1000);
      }

      bodySegments.length = 0;
      score = 0;
      text.clear();
      text.write(`Score: ${score}      High Score: ${highScore}`, {
        align: 'center',
        font: ['Impact', 24],
      });
    }
  }

  sleep(delay);
}


const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

const paddleWidth = 80;
const paddleHeight = 7.5;
let paddleX = (canvas.width - paddleWidth) / 2;
const paddleY = canvas.height - paddleHeight - 10;

const ballRadius = 15;
let ballX = canvas.width / 2;
let ballY = canvas.height - 35;
let vX = 0.50;
let vY = -1;

let rightPressed = false;
let leftPressed = false;
const paddleSpeed = 5;

const ballSpeed = 5;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") rightPressed = true;
  if (e.key === "ArrowLeft") leftPressed = true;
});
document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") rightPressed = false;
  if (e.key === "ArrowLeft") leftPressed = false;
});

function drawCanva() {
  ctx.fillStyle = "black";
  ctx.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);

  ctx.beginPath();
  ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
  ctx.fillStyle = "black";
  ctx.fill();
}

function moveBall() {
  ballX += vX * ballSpeed;
  ballY += vY * ballSpeed;
  if (ballX >= canvas.width){
    vX = -vX;
  } if (ballY <= 0) {
    vY = -vY;
  } if (ballX <= 0) {
    vX = -vX;
  } if (ballY < canvas.height && ballY > paddleY && ballX > paddleX && ballX < (canvas.width / 2) + (paddleWidth / 2)) {
    vX = -vX;
    vY = -vY;
  }
}

function loop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (rightPressed && paddleX + paddleWidth < canvas.width) {
    paddleX += paddleSpeed;
  }
  if (leftPressed && paddleX > 0) {
    paddleX -= paddleSpeed;
  }

  drawCanva();
  moveBall();
  requestAnimationFrame(loop);
}

loop();
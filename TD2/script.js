const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

const rectLength = 80;
const rectWidth = 7.5;

const circRadius = 15

ctx.fillStyle = 'black';
ctx.fillRect((canvas.width / 2) - (rectLength / 2), canvas.height - 20, rectLength, rectWidth);

ctx.beginPath();
ctx.arc((canvas.width / 2), canvas.height - 40, circRadius, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
ctx.fill();
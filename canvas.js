//Configurations for the main canvas
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var lastSecondUsed = -1;
var lastMSecUsed = -1;

function clear(){
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
}

function draw(){
  var time = new Date();
  current_msec = time.getMilliseconds();
  current_sec = time.getSeconds();
  if (current_sec != lastSecondUsed || current_msec != lastMSecUsed){
    clear();
    lastSecondUsed = current_sec;
    ctx.rotate(0.01*(((Math.PI) / 60) * current_sec + ((2 * Math.PI) / 60000) * current_msec));
    ctx.beginPath();
    ctx.arc(0.9*ctx.canvas.width, 0.05*ctx.canvas.height, 50, 0, 2 * Math.PI);
    ctx.arc(-0.9*ctx.canvas.width, -0.05*ctx.canvas.height, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }
  window.requestAnimationFrame(draw);
}

draw();

    // TypeScript code goes here
    
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var y, x, dx, dy;

function gameLoop()
{
    requestAnimationFrame(gameLoop);
    
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 320, 480);
    draw();
}

window.onload = () =>
{
    canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    x = canvas.width / 2;
    y = canvas.height - 30;
    dx = 2;
    dy = -2;
    gameLoop();
}
    function drawBall()
    {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }

    function draw()
    {
        // drawing code
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x += dx;
        y += dy;
    }
//    setInterval(draw, 10);
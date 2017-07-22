    // TypeScript code goes here
    
var canvas: HTMLCanvasElement;
var ctx: CanvasRenderingContext2D;
var y, x, dx, dy, ballRadius;

function gameLoop()
{
    requestAnimationFrame(gameLoop);
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
    ballRadius = 10;
    gameLoop();
}
    function drawBall()
    {
        if (y + dy < 0 || y + dy > canvas.height)
        {
            dy = -dy;
        }
        if (x + dx > canvas.width || x + dx < 0)
        {
            dx = -dx;
        }
        ctx.beginPath();
        ctx.arc(x, y, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();

    }

    function draw()
    {
        // drawing code
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawBall();
        x += dx;
        y += dy;
    }
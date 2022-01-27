console.log("JS Loaded");

const canvas = document.querySelector("canvas");

console.log(canvas);

canvas.width = 600;
canvas.height = 300;

const ctx = canvas.getContext("2d");

/*
// Squares
ctx.fillStyle = "rgba(255, 0, 0, 0.5)";
ctx.fillRect(100, 100, 100, 100);

ctx.fillStyle = "blue";
ctx.fillRect(400, 100, 100, 100);

ctx.fillStyle = "#EC8C0C";
ctx.fillRect(300, 300, 100, 100);

// Rectangle
ctx.fillStyle = "yellow";
ctx.fillRect(0, 200, 300, 150);

// Line
ctx.beginPath();
ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300)
ctx.strokeStyle = "purple"; // only one color, to change color begin another new path
ctx.stroke();

// Arc / Circle
// ctx.beginPath();
// ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "green";
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(400, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "red";
// ctx.stroke();

// ctx.beginPath();
// ctx.arc(500, 300, 30, 0, Math.PI * 2, false);
// ctx.strokeStyle = "lightblue";
// ctx.stroke();

for (let i = 0; i < 89; i++){

    let x = (Math.random() * (canvas.width - 60)) + 30;
    let y = (Math.random() * (canvas.height - 60)) + 30;
    let r = Math.random() * 30;
    let rgb1 = Math.random() * 255;
    let rgb2 = Math.random() * 255;
    let rgb3 = Math.random() * 255;
    

    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2, false);
    ctx.fillStyle = `rgb(${rgb1}, ${rgb2}, ${rgb3})`;
    ctx.fill();
    ctx.strokeStyle = `rgb(${rgb2}, ${rgb3}, ${rgb1})`;
    ctx.lineWidth = 3;
    ctx.stroke();
}
*/

ctx.fillStyle = "#D68A25"; //#EC8C0C
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = "#EC8C0C";
ctx.fillRect(0, 100, 150, 100)
ctx.fillRect(450, 100, 150, 100)

ctx.beginPath();
ctx.arc(300, 150, 50, 0, Math.PI * 2, false);
ctx.fillStyle = "#EC8C0C";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.stroke();

ctx.beginPath();
ctx.arc(150, 150, 50, 0, Math.PI * 2, false);
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.setLineDash([6, 8]);
ctx.stroke();
ctx.restore();
ctx.closePath();

ctx.beginPath();
ctx.arc(450, 150, 50, 0, Math.PI * 2, false);
ctx.strokeStyle = "white";
ctx.lineWidth = 3;
ctx.setLineDash([6, 8]);
ctx.stroke();
ctx.closePath();

ctx.strokeStyle = "white"
ctx.lineWidth = 3
ctx.strokeRect(0, 100, 150, 100)
ctx.strokeRect(0, 75, 150, 150)

ctx.strokeRect(450, 100, 150, 100)
ctx.strokeRect(450, 75, 150, 150)

ctx.beginPath()
ctx.moveTo(300, 0)
ctx.lineTo(300, 300)
ctx.stroke()

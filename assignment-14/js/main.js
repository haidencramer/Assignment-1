var c = document.getElementById("backgroundImage");
var ctx = c.getContext("2d");
var cty = c.getContext("2d");

//Very Long Process here but this is how I was able to create a maze like pattern in the background for the index page.

ctx.moveTo(500, 0);
ctx.lineTo(500, 500);
ctx.lineTo(1000, 500);
ctx.lineTo(1000, 50);

ctx.lineTo(550, 50);
ctx.lineTo(550, 450);
ctx.lineTo(950, 450);
ctx.lineTo(950, 100);


ctx.lineTo(600, 100);


ctx.lineTo(600, 400);
ctx.lineTo(900, 400);
ctx.lineTo(900, 150);


ctx.lineTo(650, 150);


ctx.lineTo(650, 350);
ctx.lineTo(850, 350);
ctx.lineTo(850, 200);

ctx.lineTo(700, 200);


ctx.lineTo(700, 300);
ctx.lineTo(800, 300);
ctx.lineTo(800, 250);


ctx.lineTo(750, 250);

ctx.lineTo(750, 300);


ctx.lineTo(1000, 50);
ctx.lineTo(500, 500);


ctx.stroke();



ctx.font = '30pt tahoma';
ctx.strokeText('Maze Runner', 900, 300);

//Author
ctx.font = '15pt Impact';
ctx.fillStyle = 'blue';
ctx.fillText('by: James Dashner', 910, 350);










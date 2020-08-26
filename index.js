const boton = document.getElementById("empezar");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const audio = document.getElementById("audio");

var canvasActivo = false;

boton.addEventListener("click", empezar_animacion);

var frame = 0;

michi1 = new Image();
michi1.src = "michi1.png";

michi2 = new Image();
michi2.src = "michi2.png";

michi3 = new Image();
michi3.src = "michi3.png";

michi4 = new Image();
michi4.src = "michi4.png";

michi5 = new Image();
michi5.src = "michi5.png";

michi6 = new Image();

michiDibujo = new Image();
michiDibujo.src = michi1.src;

michiIzq1 = new Image();
michiIzq1.src = "michiIzq1.png";

michiIzq2 = new Image();
michiIzq2.src = "michiIzq2.png";

michiIzq3 = new Image();
michiIzq3.src = "michiIzq3.png";

michiIzq4 = new Image();
michiIzq4.src = "michiIzq4.png";

function empezar_animacion()
{
  audio.volume = .7;
  audio.play();
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  michi1.xx = canvas.width * .2;
  michi2.xx = canvas.width * .9;
  michi3.xx = canvas.width * .9;
  michi4.xx = canvas.width * .2;
  michi5.xx = canvas.width * .6;
  michi6.xx = canvas.width * .4

  canvas.style.display = "flex";
  dibujar();
  canvasActivo = true;
  boton.remove();
  cambiarColores();
  animacion();
}

window.addEventListener("resize",
  function()
  {
    if (canvasActivo)
    {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      dibujar();
      dibujarMichis();
    }
  }
);

var color0 = "orange";
var color1 = "lightblue";

function dibujar()
{
  canvas.width = canvas.width;
  ctx.fillStyle = color1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "black";
  ctx.fillStyle = "black";
  ctx.lineWidth = 45;
	ctx.strokeStyle = color0;
  ctx.beginPath();
  ctx.moveTo(0, 5);
  ctx.arcTo(canvas.width - 7, 5, canvas.width - 7, canvas.height - 5, 35);
  ctx.arcTo(canvas.width - 7, canvas.height - 5, 5, canvas.height - 5, 35);
  ctx.arcTo(5, canvas.height - 5, 5, 5, 35);
  ctx.arcTo(5, 5, canvas.width - 7, 5, 35);
  ctx.stroke();
  var ancho = canvas.width * .4;
  var largo = ancho * .528;
  ctx.drawImage(michiDibujo, 0, 0, 780, 412, canvas.width * .5 - ancho / 8, canvas.height * .5 - largo / 2, ancho, largo);
}

function cambiarColores()
{
  setInterval(function()
  {
    switch (color0)
    {
      case "orange":
        color0 = "green";
        break;
      case "green":
        color0 = "blue";
        break;
      case "blue":
        color0 = "yellow";
        break;
      case "yellow":
        color0 = "lightblue";
        break;
      case "lightblue":
        color0 = "orange";
        break;
      default:
    }

    switch (color1)
    {
      case "lightblue":
        color1 = "yellow";
        break;
      case "yellow":
        color1 = "green";
        break;
      case "green":
        color1 = "blue";
        break;
      case "blue":
        color1 = "orange";
        break;
      case "orange":
        color1 = "lightblue";
        break;
      default:
    }
  }, 500);
}

function animacion()
{
  setInterval(function()
  {
    switch (frame) {
      case 0:
        frame = 1;
        michiDibujo.src = michi2.src;
        break;
      case 1:
        frame = 2;
        michiDibujo.src = michi3.src;
        break;
      case 2:
        frame = 3;
        michiDibujo.src = michi4.src;
        break;
      case 3:
        frame = 4;
        michiDibujo.src = michi5.src;
        break;
      case 4:
        frame = 5;
        michiDibujo.src = michiIzq4.src;
        break;
      case 5:
        frame = 6;
        michiDibujo.src = michiIzq3.src;
        break;
      case 6:
        frame = 7;
        michiDibujo.src = michiIzq2.src;
        break;
      case 7:
        frame = 8;
        michiDibujo.src = michiIzq1.src;
        break;
      case 8:
        frame = 9;
        michiDibujo.src = michiIzq2.src;
        break;
      case 9:
        frame = 10;
        michiDibujo.src = michiIzq3.src;
        break;
      case 10:
        frame = 11;
        michiDibujo.src = michiIzq4.src;
        break;
      case 11:
        frame = 12;
        michiDibujo.src = michi5.src;
        break;
      case 12:
        frame = 13;
        michiDibujo.src = michi4.src
        break;
      case 13:
        frame = 14;
        michiDibujo.src = michi3.src;
        break;
      case 14:
        frame = 15;
        michiDibujo.src = michi2.src;
        break;
      case 15:
        frame = 0;
        michiDibujo.src = michi1.src;
        break;
      default:
    }
    moverMichis(michi1, 10);
    moverMichis(michi2, 15);
    moverMichis(michi3, 5);
    moverMichis(michi4, 20);
    moverMichis(michi5, 10);
    moverMichis(michi6, 20);

    dibujar();
    dibujarMichis();
  }, 50);
}

function dibujarMichis()
{
  ctx.globalAlpha = .5;
  michi1.ancho = canvas.width * .2; //225
  michi1.largo = michi1.ancho * .528;
  ctx.drawImage(michiDibujo, 0, 0, 780, 412, michi1.xx - michi1.ancho / 8, canvas.height * .2 - michi1.largo / 2, michi1.ancho, michi1.largo);
  michi2.ancho = canvas.width * .3; //337.5
  michi2.largo = michi2.ancho * .528;
  ctx.drawImage(michiDibujo, 0, 0, 780, 412, michi2.xx - michi2.ancho / 8, canvas.height * .8 - michi2.largo / 2, michi2.ancho, michi2.largo);
  michi3.ancho = canvas.width * .4;//450
  michi3.largo = michi3.ancho * .528;
  ctx.drawImage(michiDibujo, 0, 0, 780, 412, michi3.xx - michi3.ancho / 8, canvas.height * .2 - michi3.largo / 2, michi3.ancho, michi3.largo);
  michi4.ancho = canvas.width * .1;//112.5
  michi4.largo = michi4.ancho * .528;
  ctx.drawImage(michiDibujo, 0, 0, 780, 412, michi4.xx - michi4.ancho / 8, canvas.height * .8 - michi4.largo / 2, michi4.ancho, michi4.largo);
  michi5.ancho = canvas.width * .5;
  michi5.largo = michi5.ancho * .528;
  ctx.drawImage(michiDibujo, 0, 0, 780, 412, michi5.xx - michi5.ancho / 8, canvas.height * .6 - michi5.largo / 2, michi5.ancho, michi5.largo);
  michi6.ancho = canvas.width * .6;
  michi6.largo = michi6.ancho * .528;
  ctx.drawImage(michiDibujo, 0, 0, 780, 412, michi6.xx - michi6.ancho / 8, canvas.height * .3 - michi6.largo / 2, michi5.ancho, michi6.largo);
  ctx.globalAlpha = 1;
}

function moverMichis(michi, velocidad)
{
  michi.xx -= velocidad;
  if (michi.xx + michi.ancho <= 0)
  {
    michi.xx = canvas.width;
  }
}

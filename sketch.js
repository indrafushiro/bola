
let xBolinha = 300;
let yBolinha = 200;
let diamentro = 30;
let velocidade = 1;

function setup() {
    createCanvas(600, 400);
  }

  function draw() {
    background(0);
    criarBolinha()
 
function criarBolinha(){
    circle(xBolinha,yBolinha,diamentro);
}

xBolinha += velocidade;

if(xBolinha > width || xBolinha < 0){
    velocidade *= -1;
}
}





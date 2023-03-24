let boton1, boton2;

window.onload = function () {
    programa1();
    programa2();
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    fondomensaje(this);
    // Creamos el botón 1
    boton1 = createButton("toquesitos");
    boton1.position(100, 100);
    boton1.mousePressed(programa1);

    // Creamos el botón 2
    boton2 = createButton("mensajes");
    boton2.position(200, 100);
    boton2.mousePressed(programa2);
}

function draw() {
    background(150);
    
}
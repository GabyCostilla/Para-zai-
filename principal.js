let message = "Te amo Zai";
let delay = 1000;
let showMessage = false;
let images = [];
let imageDelay = 5000;
let lastImageTime = 0;
let messageCount = 0;
const MAX_MESSAGES = 3;
let textWidthMessage;

function preload() {
    // Carga todas las imágenes en el array "images"
    images.push(loadImage("https://pbs.twimg.com/media/FKwEX_JUcAU2Vf5.jpg:large"));
    images.push(loadImage("https://pbs.twimg.com/media/FFHt81-UYAACLfP.jpg:large"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxXxyCQNA7Q30rIJe0zaB4Y7P7VycsgsyNhA&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL0fPpBoP-Bpoq92C4qqYdrj8EdBW3iJWXvA&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7RvDN7DsU4kvVPtWvfO6pjCKm3fXpp32G1A&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxul9Fi9XSPoPSkjkhbbc9sGilQihHYb1STQ&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4nrwo_SURvLk8PyQry3yPXgBSibVe9EXKrg&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTGicCniGkDKYLJrDiW3DoIGHMRI4hquhVKQ&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRalwMnxQCqiyAJ0LugSn-7NgWSTZuxZN7YYQ&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9ByELQjw2TxVKdaiUe6loMHkJIquumXX6EqMdA-TreehR6F5WQS0f16IQeW2ft6GCzk&usqp=CAU"));
    images.push(loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTecdeD2msfA5SlVs0jnhfNDucHD1TgnVCaIQ&usqp=CAU"));








}

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Cargar la imagen de fondo
    let backgroundImage = loadImage("https://pbs.twimg.com/media/FKwEX_JUcAU2Vf5.jpg:large", function () {
        // Ajustar la imagen al tamaño de la pantalla
        backgroundImage.resize(windowWidth, windowHeight);
    });

    // Establecer el fondo de la pantalla con la imagen cargada y ajustada
    background(backgroundImage);

    textSize(50);
    textFont('Midspicy')
    fill("black");
    noStroke();


    textWidthMessage = textWidth(message);
}


function draw() {
    // Muestra una imagen aleatoria en el fondo de la pantalla
    let currentTime = millis();
    if (currentTime - lastImageTime > imageDelay) {
        let randomImage = random(images);
        background(randomImage);
        lastImageTime = currentTime;
    }

    // Muestra el mensaje si "showMessage" es verdadero
    if (showMessage && messageCount < MAX_MESSAGES) {
        let x = random(width - textWidthMessage);
        let y = random(height);
        let r = random(255);
        let g = random(255);
        let b = random(255);
        fill(r, g, b);
        text(message, x, y);
        messageCount++;
    }
}


function mousePressed() {
    showMessage = true;
    setTimeout(function () {
        showMessage = false;
        messageCount = 0; // Reinicia el contador de mensajes
    }, delay);
}




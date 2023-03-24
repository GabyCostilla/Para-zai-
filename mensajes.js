function programa2() {
    let messageSpeed = 2;
    let startY;
    let endY = 0;
    let messages = ["te amooo zai", "Eres la mejor <33", "te adoro muchito", "ME ENCANTAAAS <333", "tu gaby te ama mucho", "Zai, sigue adelante con tu día y no dejes que nada te detenga porque al final tienes mi apoyo.",
        "Zaira, no te rindas, sé que eres lo suficientemente fuerte para superar cualquier obstáculo y si te supera, recurre al ZAIBY <33.",
        "Zai, eres una persona increíble y tienes un gran potencial. enserio lo digo, adoro tu forma de aprender.",
        "Zaira, no te preocupes por lo que otros piensan de ti. Lo importante es lo que tú pienses de ti y yo te amo como eres.",
        "Zai, recuerda que cada día es una nueva oportunidad para ser feliz y hacer algo grandioso.",
        "Zaira, no dejes que el miedo te detenga. A veces, la única forma de crecer es enfrentando tus miedos.",
        "Zai, eres una persona muy especial y tienes un lugar único en este mundo.",
        "Zaira, confía en ti misma y en tus habilidades. Puedes hacer cualquier cosa que te propongas.",
        "Zai, sigue luchando por tus sueños. No hay nada más valioso que perseguir lo que realmente quieres.",
        "Zaira, eres una persona increíblemente talentosa y tienes mucho que ofrecer al mundo.",
        "Zai, no dejes que los errores del pasado te detengan. Cada fracaso es una oportunidad para aprender y crecer.",
        "Zaira, no permitas que nadie te haga sentir menos. Eres única y valiosa tal y como eres.",
        "Zai, tienes un futuro brillante por delante. Sigue adelante y persigue tus sueños.",
        "Zaira, eres una persona muy valiente y fuerte. No te rindas ante los desafíos.",
        "Zai, recuerda que el éxito no se mide por lo que tienes, sino por lo que has superado.",
        "Zaira, eres una persona maravillosa y estoy seguro de que harás grandes cosas en la vida.",
        "Zai, sigue adelante con determinación y fuerza. El futuro está en tus manos y el zaiby tmb <3.",
        "Zaira, siempre recuerda que eres amada y apreciada por aquellos que te rodean.",
        "Zai, no te rindas ante las dificultades. Eres lo suficientemente fuerte para superar cualquier cosa.",
        "Zaira, tienes el potencial para lograr cosas increíbles en la vida. Sigue adelante con pasión y determinación.",
        "Zai, no permitas que nadie te haga sentir inferior. Eres valiosa y única tal y como eres.",
        "Zaira, sigue adelante con coraje y fuerza. Estoy seguro de que lograrás todo lo que te propongas.",
        "Zai, recuerda que la felicidad no está en las cosas materiales, sino en las pequeñas cosas de la vida.",
        "Zaira, sigue adelante con confianza y seguridad. Eres una persona excepcional y talentosa.",
        "Zai, no permitas que las críticas te detengan. Eres lo suficientemente fuerte para superar cualquier obstáculo.",
        "Zaira, siempre recuerda que eres una persona increíblemente valiosa y única.",];
    let currentMessage = "";
    let button;
    let colorsChanged = true
    let backgroundColor = 0;
    let textColor = 255;
    let lineHeight = 30;

    function setup() {
        createCanvas(windowWidth, windowHeight); // utiliza el ancho y alto de la ventana del navegador
        startY = height; // establece el valor inicial de la posición Y en la parte inferior de la ventana
        background(backgroundColor);
        frameRate(30);
        textAlign(CENTER);
        textSize(24);
        textLeading(lineHeight);
        currentMessage = random(messages);
        currentMessage = random(messages);

        button = createButton('ZAIBY MODE');
        button.position(0, 0);
        button.mousePressed(changeColors);
    }

    function fondomensaje() {
        background(backgroundColor);
        fill(textColor);
        let lines = splitMessage(currentMessage, width - 100); // dividir la frase en líneas
        drawLines(lines); // dibujar todas las líneas
        startY -= messageSpeed;
        if (startY < -lineHeight * lines.length) { // ajustar el límite inferior de startY según la cantidad de líneas
            startY = height;
            currentMessage = random(messages);
        }
    }

    function splitMessage(message, maxWidth) {
        let words = message.split(" ");
        let lines = [];
        let currentLine = "";
        for (let i = 0; i < words.length; i++) {
            let word = words[i];
            let currentWidth = textWidth(currentLine + " " + word);
            if (currentWidth > maxWidth) { // si la línea actual supera el ancho máximo, agregarla al array de líneas y comenzar una nueva línea
                lines.push(currentLine.trim());
                currentLine = word;
            } else {
                currentLine += " " + word;
            }
        }
        lines.push(currentLine.trim()); // agregar la última línea
        return lines;
    }

    function drawLines(lines) {
        let currentY = startY;
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i];
            text(line, width / 2, currentY);
            currentY += lineHeight;
        }
    }

    function changeColors() {
        if (colorsChanged) {
            backgroundColor = 0;
            textColor = 255;
            colorsChanged = false;
        } else {
            backgroundColor = color(0, 255, 0);
            textColor = color(255, 0, 0);
            colorsChanged = true;
        }
    }

    function windowResized() { // ajusta el canvas al tamaño de la ventana del navegador
        resizeCanvas(maxMessageWidth + canvasWidthMargin, windowHeight);
        startY = height;
    }
}
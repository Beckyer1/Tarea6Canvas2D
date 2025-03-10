const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let color = "white";

function dibujarTexto() {
    ctx.font = "bold 15px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(
        "Mueve el mouse y utiliza este espacio como un lienzo para dibujar. Mientras mueves el mouse, presiona diferentes teclas para crear trazos y disfrutar del proceso. Si deseas limpiar el lienzo, simplemente presiona la tecla de espacio.",
        canvas.width / 2,
        40
    );
}

function dibujarComposicion( x, y ) { 

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+300, y+450, 300, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+275, y+450, 275, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+250, y+450, 250, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+225, y+450, 225, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+200, y+450, 200, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+175, y+450, 175, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+150, y+450, 150, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+125, y+450, 125, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+100, y+450, 100, 300, 0, 0, Math.PI*2);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.ellipse(x+75, y+450, 75, 300, 0, 0, Math.PI*2);
    ctx.stroke();

}


function envolturaDelEvento(eventData){
    dibujarComposicion(eventData.clientX, eventData.clientY-450)
}

window.addEventListener('mousemove',envolturaDelEvento)


window.addEventListener("keyup", (event) => {
    const colores = {
        
        "a": "aquamarine",
        "b": "blue", 
        "c": "cyan",  
        "d": "gold",  
        "e": "brown",  
        "f": "fuchsia",  
        "g": "green",  
        "h": "beige",
        "i": "magenta",
        "j": "lavender",
        "k": "blueviolet",
        "l": "navy",
        "m": "purple",
        "n": "olive",
        "o": "orange",
        "p": "pink",
        "q": "turquoise",
        "r": "red",       
        "s": "salmon",
        "t": "indigo",
        "u": "mediumseagreen",
        "v": "yellow",
        "w": "white"    
    
    };

    if (event.key in colores) {
        color = colores[event.key]; 
        dibujarComposicion(color);
    }

    if (event.code === "Space") {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});


dibujarTexto();
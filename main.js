let canvas = document.querySelector("#scene");
let context = canvas.getContext("2d");

function drawBoard(){
    // Box width
    const bw = canvas.offsetWidth * 2;
    // Box height
    const bh = canvas.offsetHeight * 2;
    // Padding
    const p = 0;
    for (let x = 0; x <= bw; x += 80) {
        context.moveTo(0.5 + x + p, p);
        context.lineTo(0.5 + x + p, bh + p);
    }

    for (var x = 0; x <= bh; x += 80) {
        context.moveTo(p, 0.5 + x + p);
        context.lineTo(bw + p, 0.5 + x + p);
    }
    context.strokeStyle = "black";
    context.stroke();
}

drawBoard();
/* 30 june 2021 
sketch a sketch odin project
diwash nembang

features user can draw in a canvas
*/
// let j;
// let d;
let brush="black";


// move the pointer above the slider
function moveIndicator() {
    const range = document.querySelector(".slider");
    const indicator = document.querySelector(".indicator-text");

    range.addEventListener("input", (e) => {
        indicator.textContent = range.value;
        indicator.style.left = range.value * 1.48 + "%";
    });
}

function makeGrid(width, row) {
    canvas = document.querySelector(".canvas");
    canvas.setAttribute("style", `grid-template-columns:repeat(${width},1fr`);
    for (let i = 0; i < width * row; i++) {
        cell = document.createElement("div");
        cell.setAttribute("style", "border:solid 0.1px black");
        canvas.appendChild(cell);
        canvas.addEventListener("mousedown", readyToDraw);
    }
}


function readyToDraw() {
    const children =document.querySelector(".canvas").children;
    const cells = Array.from(children);

    cells.forEach((cell) => {
            let draw=drawing.bind(cell,brush)
            cell.onclick = () => (cell.style.background = brush);
            cell.addEventListener("mousemove",draw);
            document.addEventListener("mouseup", (e) => { 
                cell.removeEventListener("mousemove", draw)
            });
            // console.log(document);
        });
}


function drawing(color){
    this.style.background=color;
}
// function noDraw(cells,d) {
//     cells.forEach((cell) => {
//         cell.removeEventListener("mousemove", d);
//     });
// }


function makeColorPallet() {
    const pallet = document.querySelector(".pallet");
    const palletChidrens = pallet.children;
    const colors = Array.from(palletChidrens);
    colors.forEach((color) => {
        let colorName = color.getAttribute("data-color");
        color.style.background = colorName;
        // console.log(colorName,"and",color);
        color.addEventListener("click",()=>brush=colorName);
    });
}

function clearButton(){
    const canvasChildren=document.querySelector(".canvas").children;
    const cells=Array.from(canvasChildren);
    const clear=document.querySelector(".button");
    clear.addEventListener("click",()=>{
        reset(cells);
    });

}

function reset(cells){
    console.log("yes");
    cells.forEach(cell=>{cell.style.background="#c4c4c4"})
    
}
    





function main() {
    moveIndicator();
    makeGrid(16, 16);
    makeColorPallet();
    clearButton();
}

main();

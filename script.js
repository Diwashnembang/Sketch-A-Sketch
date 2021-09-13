/* 30 june 2021 
sketch a sketch odin project
diwash nembang

features user can draw in a canvas
*/
// let j;
// let d;
let brush = ["black"];

// move indicator dom
const range = document.querySelector(".slider");
const indicator = document.querySelector(".indicator-text");

// move the pointer above the slider
function moveIndicator() {
    range.addEventListener("input", (e) => {
        indicator.textContent = range.value;
        indicator.style.left = range.value+"%";
        // makeGrid(range.value,range.value);
    });
}

// const canvas = document.querySelector(".canvas");
function makeGrid(width, row) {
    canvas.setAttribute("style", `grid-template-columns:repeat(${width},1fr`);
    for (let i = 0; i < width * row; i++) {
        let cell = document.createElement("div");
        cell.setAttribute("style", "border:solid 0.1px black");
        canvas.appendChild(cell);
        cell.classList.toggle("cell");
    }
}

const children = document.querySelector(".canvas").children;
function readyToDraw() {
//  if (start) return console.log("nodraw out");
    const cells = Array.from(children);
    cells.forEach((cell) => {
        let draw = drawing.bind(cell);
        // cell.onmousedown = () => draw();
        // for windows /mouse
        cell.addEventListener("mouseup", draw);
        cell.addEventListener("mouseover", draw);
        document.addEventListener("mouseup", (e) => {
            cell.removeEventListener("mouseover", draw);
            cell.removeEventListener("mouseup",draw);
        });

        //for mobile phones
        cell.addEventListener("touchend", draw,{once:true});
        cell.addEventListener("touchmove", draw,{once:true});
        // document.addEventListener("touchend", (e) => {
        //     cell.removeEventListener("touchend", draw);
        //     cell.removeEventtListener("touchmove", draw);

        //     // console.log(document);
        // });
    });

}

function drawing(color) {
    this.style.background = brush[0];

    // state.push(this);
}

const pallet = document.querySelector(".pallet");
const palletChidrens = pallet.children;
const colors = Array.from(palletChidrens);
function makeColorPallet() {
    colors.forEach((color) => {
        let colorName = color.getAttribute("data-color");
        color.style.background = colorName;
        // console.log(colorName,"and",color);
        color.addEventListener("click", () => (brush[0] = colorName));
    });
}

const clear = document.querySelector(".button");
function clearButton() {
    clear.addEventListener("click", () => {
        const canvasChildren = document.querySelector(".canvas").children;
        const cells = Array.from(canvasChildren);
        reset(cells);
    });
}

function reset(cells) {
    cells.forEach((cell) => {
        cell.style.background = "#c4c4c4";
    });
}

const slider = document.querySelector(".slider");

const canvas = document.querySelector(".canvas");
function changeGrid() {
    slider.addEventListener("input", () => {
        while (canvas.firstChild) {
            canvas.removeChild(canvas.firstChild);
        }

        makeGrid(slider.value, slider.value);
        start=false;
    });
}



function main() {
    moveIndicator();
    makeGrid(16, 16);
    changeGrid();
    makeColorPallet();
    clearButton();
    changeGrid();
}
let start=false
main();
canvas.addEventListener("mousedown", (e) => readyToDraw());
canvas.addEventListener("touchstart", readyToDraw);

/* 30 june 
sketch a sketch odin project
diwash nembang

features user can draw in a canvas
*/

function moveIndicator() {
    const range = document.querySelector(".slider");
    const indicator = document.querySelector(".indicator-text");

    range.addEventListener("input", (e) => {
        indicator.textContent = range.value;
        indicator.style.left = range.value * 1.48 + "%";
    });
}

function makeGrid(width, row) {
    const canvas = document.querySelector(".canvas");
    canvas.setAttribute("style", `grid-template-columns:repeat(${width},1fr`);
    for (let i = 0; i < width * row; i++) {
        cell = document.createElement("div");
        cell.setAttribute("style", "border:solid 0.1px black");
        canvas.appendChild(cell);
        canvas.addEventListener("mousedown", readyToDraw);
    }
}

function readyToDraw(e) {
    const children = this.children;
    const cells = Array.from(children);

    cells.forEach((cell) => {
        cell.onclick = () => (cell.style.background = "black");
        cell.addEventListener("mousemove", draw);
        cell.addEventListener("mouseup", (e) => noDraw(cells));
    });
}

function draw() {
    this.style.background = "black";
    addEventListener("mouseup", (e) =>
        this.removeEventListener("mousemove", draw)
    );
}

function noDraw(cells) {
    cells.forEach((cell) => {
        cell.removeEventListener("mousemove", draw);
    });
}


function makeColorPallet() {
    const pallet = document.querySelector(".pallet");
    const palletChidrens = pallet.children;
    const colors = Array.from(palletChidrens);
    colors.forEach((color) => {
        let colorName = color.getAttribute("data-color");
        color.style.background = colorName;
        // console.log(colorName,"and",color);
    });
}

function main() {
    moveIndicator();
    makeGrid(16, 16);
    makeColorPallet();
}

main();

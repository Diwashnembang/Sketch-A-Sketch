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
        // makeGrid(range.value,range.value);
    });
}

function makeGrid(width, row) {

    canvas = document.querySelector(".canvas");
    canvas.setAttribute("style", `grid-template-columns:repeat(${width},1fr`);
    for (let i = 0; i < width * row; i++) {
       
        let cell = document.createElement("div");
        cell.setAttribute("style", "border:solid 0.1px black");
        canvas.appendChild(cell);
        cell.classList.toggle("cell");
    }
    canvas.addEventListener("mousedown", readyToDraw);
    canvas.addEventListener("touchstart",readyToDraw);
}


function readyToDraw(e) {
    const children =document.querySelector(".canvas").children;
    const cells = Array.from(children);
    console.log(e.type)

    cells.forEach((cell) => {
            let draw=drawing.bind(cell,brush)
            cell.onclick = () => (cell.style.background = brush);
            // for windows /mouse
            if(e.type==="mousedown"){
                cell.addEventListener("mousemove",draw);
                document.addEventListener("mouseup", (e) => { 
                    cell.removeEventListener("mousemove", draw)
                    
                });
        }

            //for mobile phones
            cell.ontouch = () => (cell.style.background = brush);
            cell.addEventListener("touchmove",draw);
            document.addEventListener("touchend", (e) => { 
                cell.removeEventListener("touchend", draw)


            // console.log(document);
        });
})
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
    const clear=document.querySelector(".button");
    clear.addEventListener("click",()=>{
        const canvasChildren=document.querySelector(".canvas").children;
        const cells=Array.from(canvasChildren);
        reset(cells);
    });

}

function reset(cells){
    console.log("yes");
    cells.forEach(cell=>{cell.style.background="#c4c4c4"})
    
}
    
function changeGrid(){
    const range = document.querySelector(".slider");
    
    const canvas=document.querySelector(".canvas");
    range.addEventListener("input",()=>{
        while(canvas.firstChild){
            canvas.removeChild(canvas.firstChild);
        }
     
        makeGrid(range.value,range.value);
    
    })

}




function main() {
    moveIndicator();
    makeGrid(16, 16);
    changeGrid()
    makeColorPallet();
    clearButton();
    changeGrid();
}

main();

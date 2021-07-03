/* 30 june 2021 
sketch a sketch odin project
diwash nembang

features user can draw in a canvas
*/
// let j;
// let d;


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

let d;
function readyToDraw() {
    const children =document.querySelector(".canvas").children;
    const cells = Array.from(children);
    // console.log(e)

    cells.forEach((cell) => {
        let a=[]
        d=drawing.bind(cell,"green")
        cell.onclick = () => (cell.style.background = "black");
        // cell.addEventListener("mousemove",d);
        a.push(cell.addEventListener("mousemove",d));
        cell.addEventListener("mouseup", (e) => noDraw(cells,a[0]));
    });
}

// function draw(elemn,event,f,v){

//      d= ()=>{
//         f(v,elemn)
//     };

//     // let c=d;
        
    
//     elemn.addEventListener(event,d);
//     return d;
//     // console.log(this)
// }


// function addListenerWithArgs(elem, evt, func, vars){
//     var f = function(ff, vv,ee){
//             return (function (){
//                 ff(vv,ee);
//             });
//     }(func, vars,elem);

//     elem.addEventListener(evt, f);

//     return f;
// }

// function draw(a,b){


//     return function drawing(){
//         let color=b;
//         a.style.background=color;
        
        
        
//         // console.log(e.target.colors)
        
//     }
    
// }

function drawing(color){
    this.style.background=color;
}
function noDraw(cells,d) {
    cells.forEach((cell) => {
        cell.removeEventListener("mousemove", d);
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
        // color.addEventListener("click",()=>readyToDraw.bind(null,colorName));
    });
}

// chooseColor(colorName){
    


// }



function main() {
    moveIndicator();
    makeGrid(16, 16);
    makeColorPallet();
}

main();

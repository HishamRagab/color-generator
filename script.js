let container = document.querySelector(".container");
let btn = document.querySelector("button");
let lengthColor = 50;
let colors = [];

///////////////////////////////////////////

createBoxs();
function createBoxs() {
  for (let i = 0; i < lengthColor; i++) {
    let box = document.createElement("div");
    let backgroundBox = document.createElement("div");
    let colorBox = document.createElement("div");
    box.className = "box";
    backgroundBox.className = "background";
    colorBox.className = "color";
    box.appendChild(backgroundBox);
    box.appendChild(colorBox);
    container.appendChild(box);
  }
}

///////////////////////////////////////////

let boxs = document.querySelectorAll(".box");

changeColor();
function changeColor() {
  let arrColor = [];
  for (let i = 0; i < lengthColor; i++) {
    let color = "#";
    for (let j = 0; j < 6; j++) {
      color += "ABCDEF0123456789"[Math.floor(Math.random() * 16)];
    }
    arrColor.push(color);
  }
  boxs.forEach((box, i) => {
    box.firstElementChild.style.cssText = `background-color: ${arrColor[i]}`;
    box.lastElementChild.textContent = arrColor[i];
  });
  colors = arrColor;
  arrColor = [];
}

btn.addEventListener("click", changeColor);

///////////////////////////////////////////

boxs.forEach((box, i) => {
  box.onclick = function () {
    box.classList.add("copied");
    box.lastElementChild.textContent = "COPIED";
    navigator.clipboard.writeText(colors[i]);
    setTimeout(() => box.classList.remove("copied"), 100);
    setTimeout(() => (box.lastElementChild.textContent = colors[i]), 1000);
  };
});

///////////////////////////////////////////

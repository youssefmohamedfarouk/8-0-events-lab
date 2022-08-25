// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 10000; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

const currentColor = document.querySelector("#current-color");
const allColors = document.querySelectorAll(".color");
for (let color of allColors) {
  color.addEventListener("click", (event) => {
    currentColor.setAttribute("style", "background: " + event.target.style.backgroundColor)
  });
}

const grid = document.querySelectorAll(".cell");
for (let box of grid) {
  box.addEventListener("mousedown", (event) => {
      box.setAttribute("style", "background: " + currentColor.style.backgroundColor);
  });

  box.addEventListener("mouseover", (event) => {
    if (event.buttons === 1 || event.buttons === 3) {
      box.setAttribute("style", "background: " + currentColor.style.backgroundColor);
    }
  });
}

const curColor = document.querySelector("#current-color");
// const buttonArea = document.createElement("section");
// document.append(buttonArea);


const reset = document.createElement("button");
const paintAll = document.createElement("button");

reset.style.background = "lightgrey";
reset.textContent = "Reset Canvas";
reset.style["position"] = "absolute"
reset.style["right"] = "200px";
reset.style["bottom"] = "35px";
reset.style["text-align"]= "center";
reset.style["width"] = "60px"

reset.addEventListener("click", (event) => {
  for (let box of grid) {
    box.setAttribute("style", "background: null");
  }
})

paintAll.style.background = "lightgrey";
paintAll.textContent = "Paint All";
paintAll.style["position"] = "absolute"
paintAll.style["left"] = "200px";
paintAll.style["bottom"] = "35px";
paintAll.style["width"] = "60px"
paintAll.style["text-align"]= "center";

paintAll.addEventListener("click", (event) => {
  for (let box of grid) {
    box.setAttribute("style", "background: " + currentColor.style.backgroundColor);
  }
})

curColor.append(reset);
curColor.append(paintAll);

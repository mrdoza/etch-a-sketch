const inputDiv = document.getElementById("input");
const rowInput = document.createElement("input");
  rowInput.setAttribute("type", "number");
  rowInput.setAttribute("id", "rowInput");

  const drawButton = document.createElement("button");
  drawButton.setAttribute("id", "drawButton");
  drawButton.textContent = "Draw";

  const clearButton = document.createElement("button");
  clearButton.setAttribute("id", "clearButton");
  clearButton.textContent = "Clear";

  inputDiv.appendChild(rowInput);
  inputDiv.appendChild(drawButton);
  inputDiv.appendChild(clearButton);

drawButton.addEventListener("click", () => {
  const rowValueString = rowInput.value; 
  const rowValue = parseInt(rowValueString, 10);   
  if (!isNaN(rowValue)) {    
    let boxCountRow = rowValue;    
 
if (boxCountRow > 100) {
  boxCountRow = 100;
};
let boxCount = boxCountRow * boxCountRow;

const existingBoxes = document.querySelectorAll('#colorBox');
existingBoxes.forEach((box) => {
  box.remove();
});

const container = document.getElementById("boxContainer");
for (let i = 0; i < boxCount; i++) {
  const box = document.createElement("div");
  box.id = `colorBox`;
  container.appendChild(box);
  box.style.width = `${100 / boxCountRow}%`;
}
const boxes = document.querySelectorAll('#colorBox');
boxes.forEach((box) => {
  box.addEventListener('mouseover', () => {
    box.style.backgroundColor = getRandomColor();
  });
  clearButton.addEventListener("click", () => {
    boxes.forEach((box) => {
      box.style.backgroundColor = "white";
    });
  });
  
});
} else {
  // Handle invalid input (e.g., alert the user)
  alert("Please enter a number of rows.");
}
});



function getRandomColor() { 
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};




  
  
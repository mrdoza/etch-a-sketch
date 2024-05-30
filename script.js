let boxCountRow = 4;

let boxCount = boxCountRow * boxCountRow;

const container = document.getElementById("boxContainer");

for (let i = 0; i < boxCount; i++) {
  const box = document.createElement("div");
  box.id = `colorBox`;
  container.appendChild(box);
}

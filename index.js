const container = document.querySelector(".container"),  
    panel = document.querySelector(".panel");
    sheet = document.querySelector("#sheet");

for(let i = 0; i < 24; i++) {
  container.appendChild(panel.cloneNode());
}

for(let i = 0; i < 377; i++) {
    sheet.appendChild(container.cloneNode(true));
}
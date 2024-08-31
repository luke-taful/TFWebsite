//Panel Cloning
const container = document.querySelector(".container"),  
    panel = document.querySelector(".panel");
    sheet = document.querySelector("#sheet");

for(let i = 0; i < 24; i++) {
  container.appendChild(panel.cloneNode());
}

for(let i = 0; i < 377; i++) {
    sheet.appendChild(container.cloneNode(true));
}

//Background Panel Effects
document.onmousemove = e => {
  var cursorX = e.clientX;
  var cursorY = e.clientY;
  let elements = document.elementsFromPoint(cursorX, cursorY);
    elements.forEach((item) => {

      if(item.className == "panel"){
        let close = item.closest(".container");
        let prev = item.previousElementSibling
        let nxt = item.nextElementSibling

        item.style.background = `#bad4f35f`;

        if(prev != null){
          prev.style.background = `#bad4f35f`;
          setTimeout(() => { prev.style.background = `#00000000`; }, 300);
        }
        if(nxt != null){
          nxt.style.background = `#bad4f35f`;
          setTimeout(() => { nxt.style.background = `#00000000`; }, 300);
        }
        close.style.background = `#5ba5ff5f`;
        setTimeout(() => { item.style.background = `#00000000`; }, 500);
        setTimeout(() => { close.style.background = `#00000000`; }, 500);
      }
    });
  };

  
// function panelLight(e){
//   let item = e.target;
//         item.style.background = `#bad4f35f`;
// };
// function panelLightOff(e){
//   let item = e.target;
//   setTimeout(() => {  item.style.background = `#00000000`; }, 500);
// };
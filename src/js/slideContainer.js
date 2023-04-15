import { loadElement } from "./mainComponents/adversting";

function globalSlideCont() {
  const slideCont = document.querySelector("#slide-cont-1");
  const nav = document.querySelector("#first-nav");

  slideCont.style.marginTop = `${nav.style.height}px`;
}

export { globalSlideCont };

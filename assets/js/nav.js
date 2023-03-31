let nav = document.querySelector("#first-nav");
let linkA = document.querySelectorAll(".items-nav");
let produtos = document.querySelector(".produtos");

const cardapio = document.querySelector("#cardapio");

cardapio.addEventListener("mouseover", (e) => {
  if (e.relatedTarget === produtos) {
    produtos;
  }
});

function globalNav() {
  let nav = document.querySelector("#first-nav");
  let navA = document.querySelectorAll(".items-nav");
  let largura = `${window.innerWidth - 100}px`;

  const body = document.querySelector("body");
  const produtos = document.querySelector(".produtos");
  const cardapio = document.querySelector("#cardapio");

  produtos.style.width = largura;

  cardapio.addEventListener("mouseover", () => {
    produtos.style.display = "block";
  });

  cardapio.addEventListener("mouseout", () => {
    produtos.style.display = "none";
  });

  // Adiciona os eventos de mouseover e mouseout no elemento "Produtos"
  produtos.addEventListener("mouseover", () => {
    produtos.style.display = "block";
  });

  produtos.addEventListener("mouseout", () => {
    produtos.style.display = "none";
  });

  console.log(largura);
}

export { globalNav };

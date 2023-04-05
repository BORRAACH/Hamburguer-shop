function globalNav() {
  let nav = document.querySelector("#first-nav");
  let navA = document.querySelectorAll(".items-nav");

  const produtos = document.querySelector(".produtos");
  const cardapio = document.querySelector("#cardapio");

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
}

export { globalNav };

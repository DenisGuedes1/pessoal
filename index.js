const arr = [
  {
    Id: 1,
    Nome: "cocaCola",
    Preco: 3.59,
  },
  {
    Id: 2,
    Nome: "Coxinha",
    Preco: 5.59,
  },
  {
    Id: 3,
    Nome: "Pastel",
    Preco: 4.59,
  },
  {
    Id: 4,
    Nome: "Espiha/Frango",
    Preco: 4.99,
  },
  {
    Id: 5,
    Nome: "Suco/Laranja",
    Preco: 7.99,
  },
];

function addProdutos2(arr) {
  for (let i = 0; i < arr.length; i++) {
    // criando as tag
    let tagUL = document.createElement("ul");
    let tagLi = document.createElement("li");
    let tagNome = document.createElement("h3");
    let tagPreco = document.createElement("p");
    let conteiner = document.querySelector(".cardsProducts");

    tagLi.classList.add("produtos2");
    tagNome.classList.add("especificacao");
    tagPreco.classList.add("especificacaoPreco");

    tagUL.appendChild(tagLi);
    tagLi.appendChild(tagNome);
    tagLi.appendChild(tagPreco);
    conteiner.appendChild(tagUL);

    //alimentando as tag

    tagNome.innerText = arr[i].Nome;
    tagPreco.innerText = arr[i].Preco;
  }
}
addProdutos2(arr);

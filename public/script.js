
const produtos = [
  { id: 1, nome: "Tênis Runner X", categoria: "calçados", preco: 299.90, descricao: "Leve e confortável para o dia a dia." },
  { id: 2, nome: "Mochila Urban", categoria: "acessórios", preco: 189.90, descricao: "Compartimento para notebook até 15\"." },
  { id: 3, nome: "Camiseta Básica", categoria: "roupas", preco: 59.90, descricao: "100% algodão, várias cores." },
  { id: 4, nome: "Calça Jogger", categoria: "roupas", preco: 129.90, descricao: "Conforto e estilo para qualquer ocasião." },
  { id: 5, nome: "Óculos de Sol", categoria: "acessórios", preco: 219.90, descricao: "Proteção UV400." },
  { id: 6, nome: "Sandália Slide", categoria: "calçados", preco: 89.90, descricao: "Perfeita para o verão." },
];

function renderizarCards(lista) {
  const catalogo = document.getElementById("catalogo");
  catalogo.innerHTML = "";

  lista.forEach(function(produto) {

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", produto.id);


    card.innerHTML = `
      <h2>${produto.nome}</h2>
      <p>${produto.descricao}</p>
      <span class="preco">R$ ${produto.preco.toFixed(2)}</span>
    `;

    catalogo.appendChild(card);
  });
}

renderizarCards(produtos);
const data = [
  { id: 1, nome: "iPhone 15",            preco: 5999.90, categoria: "Celulares",  imagem: "", descricao: "Chip A16, câmera 48MP.",           emEstoque: true  },
  { id: 2, nome: "Samsung Galaxy S24",   preco: 4799.90, categoria: "Celulares",  imagem: "", descricao: "Snapdragon 8 Gen 3, AMOLED.",      emEstoque: true  },
  { id: 3, nome: "Dell Inspiron",        preco: 3499.90, categoria: "Notebooks",  imagem: "", descricao: "i5, 8GB RAM, SSD 256GB.",          emEstoque: true  },
  { id: 4, nome: "MacBook Air M2",       preco: 9999.90, categoria: "Notebooks",  imagem: "", descricao: "Chip M2, tela Liquid Retina.",     emEstoque: false },
  { id: 5, nome: "Sony WH-1000XM5",      preco: 1899.90, categoria: "Acessórios", imagem: "", descricao: "Fone com cancelamento de ruído.",  emEstoque: true  },
  { id: 6, nome: "Teclado Redragon",     preco: 349.90,  categoria: "Acessórios", imagem: "", descricao: "Mecânico, RGB, ABNT2.",            emEstoque: true  },
  { id: 7, nome: "PlayStation 5",        preco: 3999.90, categoria: "Games",      imagem: "", descricao: "4K, Ray Tracing, SSD rápido.",     emEstoque: false },
  { id: 8, nome: "Controle Xbox Series", preco: 499.90,  categoria: "Games",      imagem: "", descricao: "Bluetooth, USB-C.",                emEstoque: true  },
];

const productList    = document.getElementById("product-list");
const productDetails = document.getElementById("product-details");
const inputSearch    = document.querySelector("#search");
const selectCategory = document.querySelector("#category");

function renderizarCards(lista) {
  productList.innerHTML = "";
  productDetails.innerHTML = "";

  lista.forEach(function(p) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-id", p.id);
    card.innerHTML = `<img src="${p.imagem}" /><h2>${p.nome}</h2><p>${p.descricao}</p><p>R$ ${p.preco.toFixed(2)} — ${p.emEstoque ? "Em estoque" : "Indisponível"}</p>`;
    productList.appendChild(card);
  });

  document.querySelectorAll(".card").forEach(function(card) {
    card.addEventListener("click", function() {
      const p = data.find(x => x.id === Number(card.getAttribute("data-id")));
      productDetails.innerHTML = `<div class="detalhe-box"><h3>${p.nome}</h3><p>${p.categoria} — R$ ${p.preco.toFixed(2)}</p><p>${p.descricao}</p><p>${p.emEstoque ? "Em estoque" : "Indisponível"}</p></div>`;
    });
  });
}

document.querySelector("#btnRender").addEventListener("click", function() {
  const termo = inputSearch.value.toLowerCase();
  const cat   = selectCategory.value;
  renderizarCards(data.filter(p => p.nome.toLowerCase().includes(termo) && (cat === "todas" || p.categoria === cat)));
});

renderizarCards(data);
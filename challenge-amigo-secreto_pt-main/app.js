// Lista de amigos
let amigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  // Validação
  if (nome === "") {
    alert("Por favor, insira um nome válido.");
    return;
  }

  // Adiciona à lista
  amigos.push(nome);

  // Atualiza a lista visível na tela
  atualizarLista();

  // Limpa o campo
  input.value = "";
}

// Função que atualiza a lista exibida
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Função que sorteia um amigo aleatório
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("Adicione pelo menos um nome antes de sortear!");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[indice];

  document.getElementById("resultado").textContent =
    "O amigo secreto sorteado é: " + sorteado;
}
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

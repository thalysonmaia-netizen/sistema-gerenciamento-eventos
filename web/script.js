let eventos = JSON.parse(localStorage.getItem("eventos")) || [];
let id = eventos.length + 1;

function salvarLocal() {
  localStorage.setItem("eventos", JSON.stringify(eventos));
}

function adicionarEvento() {
  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const local = document.getElementById("local").value;
  const descricao = document.getElementById("descricao").value;

  eventos.push({ id: id++, nome, data, local, descricao });
  salvarLocal();

  window.location.href = "eventos.html";
}

function listarEventos() {
  const lista = document.getElementById("listaEventos");
  if (!lista) return;

  lista.innerHTML = "";

  eventos.forEach(e => {
    lista.innerHTML += `
      <tr>
        <td>${e.id}</td>
        <td>${e.nome}</td>
        <td>${e.data}</td>
        <td>${e.local}</td>
        <td>
          <button onclick="editarEvento()">Editar</button>
          <button onclick="removerEvento(${e.id})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

function removerEvento(idEvento) {
  eventos = eventos.filter(e => e.id !== idEvento);
  salvarLocal();
  listarEventos();
}

function editarEvento() {
  window.location.href = "editar.html";
}

listarEventos();
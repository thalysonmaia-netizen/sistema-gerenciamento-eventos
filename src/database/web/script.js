let eventos = [];
let id = 1;

function adicionarEvento() {
  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const local = document.getElementById("local").value;
  const descricao = document.getElementById("descricao").value;

  eventos.push({ id: id++, nome, data, local, descricao });
  listarEventos();
}

function listarEventos() {
  const lista = document.getElementById("listaEventos");
  lista.innerHTML = "";

  eventos.forEach(e => {
    lista.innerHTML += `
      <tr>
        <td>${e.id}</td>
        <td>${e.nome}</td>
        <td>${e.data}</td>
        <td>${e.local}</td>
        <td>
          <button onclick="removerEvento(${e.id})">Excluir</button>
        </td>
      </tr>
    `;
  });
}

function removerEvento(idEvento) {
  eventos = eventos.filter(e => e.id !== idEvento);
  listarEventos();
}
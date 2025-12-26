import ui from "./ui.js";
import api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formularioPensamento = document.getElementById("pensamento-form");

  const botaoCancelar = document.getElementById("botao-cancelar");

  formularioPensamento.addEventListener("submit", manipularsubmissaoFormulario);

  botaoCancelar.addEventListener("click", manipularCancelamento);
});

async function manipularsubmissaoFormulario(event) {
  event.preventDefault();
  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    if (id) {
      await api.editarPensamentos({ id, conteudo, autoria });
    } else {
      await api.salvarPensamentos({ conteudo, autoria });
    }
    ui.renderizarPensamentos();
  } catch {
    alert("Erro ao salvar pensamento");
  }
}

function manipularCancelamento() {
  ui.limparFormulario();
}

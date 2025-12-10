import ui from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  ui.renderizarPensamentos();

  const formularioPensamento = document.getElementById("pensamento-form");

  formularioPensamento.addEventListener("submit", async (evento) => {
    evento.preventDefault(); // Evita que a página recarregue sozinha

    const conteudo = document.getElementById("pensamento-conteudo").value;
    const autoria = document.getElementById("pensamento-autoria").value;

    try {
      await api.salvarPensamento({ conteudo, autoria });

      window.location.reload();
    } catch {
      alert("Erro ao salvar o pensamento");
    }
  });
});

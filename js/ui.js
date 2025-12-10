import api from "./api.js"

const ui = {
  async renderizarPensamentos() {
    const listaPensamentos = document.getElementById("lista-pensamentos")

    try {
      const pensamentos = await api.buscarPensamentos()
      pensamentos.forEach(pensamento => {
        listaPensamentos.innerHTML += `
         <li class="li-pensamento" data-id="${pensamento.id}">
  <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icone-aspas">
  <div class="pensamento-conteudo">${pensamento.conteudo}</div>
  <div class="pensamento-autoria">${pensamento.autoria}</div>
  <div class="icones">
    <button class="botao-editar">
        <img src="assets/imagens/icone-editar.png" alt="Editar">
    </button>
    <button class="botao-excluir">
        <img src="assets/imagens/icone-excluir.png" alt="Excluir">
    </button>
  </div>
</li>
        `
      })
    }
    catch {
      alert('Erro ao renderizar pensamentos')
    }
  }
}

export default ui
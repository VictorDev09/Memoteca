import api from "js/api.js";

const ui = {
    async renderizarPensamentos(){
        const listaPensamentos = document.getElementById("lista-pensamentos");

        try {
const pensamentos =  await api.buscarPensamentos();
pensamentos.forEach(pensamento => {
listaPensamentos.innerHTML += `
   <li class="li-pensamento" data-id="${pensamento.id}">
          <img src="assets/imagens/aspas-azuis.png" alt="Aspas azuis" class="icon-aspas">
          <div class="pensamento-content">${pensamento.content}</div>
          <div class="pensamento-autoria">${pensamento.autoria}</div>
          </li>
`
})
        }
        catch {
            alert('Erro ao renderizar pensamentos');
        }
    } 
}


export default ui;
const api = {
  async buscarPensamentos() {
    try {
      const response = await fetch("http://localhost:3000/pensamentos");
      return await response.json();
    } catch (error) {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async salvarPensamentos(pensamento) {
    try {
      const response = await fetch("http://localhost:3000/pensamentos", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(pensamento),
      });
      return await response.json();
    } catch {
      alert("Erro ao salvar pensamentos");
      throw error;
    }
  },

  async buscarPensamentoPorId(id) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`);
      return await response.json();
    } catch (error) {
      alert("Erro ao buscar pensamento");
      throw error;
    }
  },

  async editarPensamentos(pensamento) {
    try {
      const response = await fetch(
        `http://localhost:3000/pensamentos/${pensamento.id}`,
        {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(pensamento),
        }
      );
      return await response.json();
    } catch {
      alert("Erro ao editar pensamento");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await fetch(`http://localhost:3000/pensamentos/${id}`, {
        method: "DELETE",
      });
    } catch {
      alert("Erro ao excluir um pensamento");
      throw error;
    }
  },
};

export default api;

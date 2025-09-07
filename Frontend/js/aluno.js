import { API_BASE_URL } from "./config.js";

if(!localStorage.getItem('isAuth')) {
  window.location.href = `login.html?error=${encodeURIComponent('Você precisa estar logado para acessar a página dos alunos')}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAluno");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = {};
    form.querySelectorAll("input, select, textarea").forEach((el) => {
      if (el.name) dados[el.name] = el.value.trim().replace(/[.()|/-]+/g, '');
    });

    try {
      const resp = await fetch(`${API_BASE_URL}/criar_aluno.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
        credentials: 'include'
      });
      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data.error) {
        showFeedback({
          type: "error",
          title: "Erro",
          message: data.message || "Dados inválidos. Revise os campos."
        });
        return;
      }

      showFeedback({
        type: "success",
        title: "Tudo certo!",
        message: "Cadastro realizado com sucesso!",
        onClose: () => form.reset()
      });
    } catch (err) {
      showFeedback({
        type: "error",
        title: "Erro",
        message: "Falha de conexão. Tente novamente."
      });
    }
  });
});

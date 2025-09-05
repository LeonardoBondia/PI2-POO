import { API_BASE } from "./config.js";
import { showFeedback } from "./feedback.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAluno");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = {};
    form.querySelectorAll("input, select, textarea").forEach((el) => {
      if (el.name) dados[el.name] = el.value.trim();
    });

    try {
      const resp = await fetch(`${API_BASE}/criar_aluno.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
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

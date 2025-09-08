import { API_BASE_URL } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formAdm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const dados = {};
    form.querySelectorAll("input").forEach((el) => {
      if (el.name) dados[el.name] = el.value.trim();
    });

    try {
      const resp = await fetch(`${API_BASE_URL}/criar_admin.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
        credentials: 'include'
      });
      const data = await resp.json();

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
        onClose: () => window.location.href='/Frontend/login.html'
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

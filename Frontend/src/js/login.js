import { API_BASE } from "./config.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");
  if (!form) return; // impede rodar fora da página de login

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    const senha = form.querySelector('input[type="password"]').value.trim();

    try {
      const resp = await fetch(`${API_BASE}/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });
      const data = await resp.json().catch(() => ({}));

      if (!resp.ok || data.error) {
        alert(data.message || "Email/Senha inválida.");
        return;
      }
      // sucesso
      window.location.href = "adm.html";
    } catch (err) {
      alert("Falha na conexão com o servidor.");
    }
  });
});

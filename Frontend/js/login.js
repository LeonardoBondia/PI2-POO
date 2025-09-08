import { API_BASE_URL } from "./config.js";

const urlParams = new URLSearchParams(window.location.search);
const error = urlParams.get('error');

if (error) {
  const message = decodeURIComponent(error);
  alert(message);
  urlParams.delete('error');
  const newUrl = `${window.location.pathname}?${urlParams.toString()}`;

  history.pushState({}, '', newUrl);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formLogin");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value.trim();
    const senha = form.querySelector('input[type="password"]').value.trim();

    try {
      const resp = await fetch(`${API_BASE_URL}/login.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
        credentials: 'include'
      });
      const data = await resp.json();

      console.log(data)

      if (!resp.ok || data.error) {
        alert(data.message || "Email/Senha inválida.");
        return;
      }
      window.localStorage.setItem('isAuth', true);
      window.location.href = "dashboard.html";
    } catch (err) {
      console.log(err)
      alert("Falha na conexão com o servidor.");
    }
  });
});

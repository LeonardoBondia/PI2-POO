function showFeedback({ type = "success", title, message, onClose } = {}) {
  const modal   = document.getElementById('feedbackModal');
  const card    = modal.querySelector('.fb-card');
  const ico     = document.getElementById('fbIcon');
  const ttl     = document.getElementById('fbTitle');
  const msg     = document.getElementById('fbMessage');
  const okBtn   = document.getElementById('fbOk');

  card.classList.remove('error');
  if (type === 'error') {
    card.classList.add('error');
    ico.textContent = '▲'; // Triângulo de alerta
    ttl.textContent = title || 'Dados inválidos';
    msg.textContent = message || 'Verifique os dados digitados.';
  } else {
    ico.textContent = '✓';
    ttl.textContent = title || 'Cadastro realizado com sucesso!';
    msg.textContent = message || 'Tudo certo!';
  }

  modal.classList.add('show');
  modal.setAttribute('aria-hidden', 'false');
  okBtn.focus();

  const close = () => {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    okBtn.removeEventListener('click', close);
    document.removeEventListener('keydown', esc);
    modal.querySelector('.fb-backdrop').onclick = null;
    if (typeof onClose === 'function') onClose();
  };
  const esc = (e) => { if (e.key === 'Escape') close(); };

  okBtn.addEventListener('click', close);
  document.addEventListener('keydown', esc);
  modal.querySelector('.fb-backdrop').onclick = close;
}

window.showFeedback = window.showFeedback || ((opts)=>showFeedback(opts));

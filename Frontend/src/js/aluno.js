document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('formAluno');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const dados = {};
    form.querySelectorAll('input, select, textarea').forEach(el=>{
      if (el.name) dados[el.name] = el.value.trim();
    });

    try {
      const resp = await fetch('../api/criar_aluno.php', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
      });
      const data = await resp.json().catch(()=> ({}));

      if (resp.ok && (data.sucesso || data.success)) {
        showFeedback({
          type: 'success',
          title: 'Cadastro realizado com sucesso!',
          message: data.mensagem || 'Aluno cadastrado.',
          onClose: () => form.reset()
        });
      } else {
        showFeedback({
          type: 'error',
          title: 'Dados inválidos. Verifique os dados digitados.',
          message: data.erro || data.error || 'Revise os campos e tente novamente.'
        });
      }
    } catch {
      showFeedback({
        type: 'error',
        title: 'Falha de conexão',
        message: 'Não foi possível enviar os dados. Tente novamente.'
      });
    }
  });
});

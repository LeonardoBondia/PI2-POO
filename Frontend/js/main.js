document.addEventListener("DOMContentLoaded", function() {
  function maskCPF(input) {
    input.addEventListener("input", function(e) {
      var value = input.value.replace(/\D/g, '');
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      input.value = value.substring(0, 14);
    });
  }
  document.querySelectorAll('input[placeholder="CPF"], input[maxlength="14"]').forEach(maskCPF);

  function maskTel(input) {
    input.addEventListener("input", function(e) {
      var value = input.value.replace(/\D/g, '');
      value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
      input.value = value.substring(0, 15);
    });
  }
  document.querySelectorAll('input[placeholder="Contato"], input[maxlength="15"]').forEach(maskTel);

  function maskCEP(input) {
    input.addEventListener("input", function(e) {
      var value = input.value.replace(/\D/g, '');
      value = value.replace(/(\d{5})(\d)/, "$1-$2");
      input.value = value.substring(0, 9);
    });
  }
  document.querySelectorAll('input[placeholder="CEP"], input[maxlength="9"]').forEach(maskCEP);
});
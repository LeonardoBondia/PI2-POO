function aplicarMascara(input, mascara) {
  input.addEventListener("input", () => {
    let valor = input.value.replace(/\D/g, "");
    let resultado = "";
    let j = 0;

    for (let i = 0; i < mascara.length; i++) {
      if (mascara[i] === "#") {
        if (valor[j] !== undefined) {
          resultado += valor[j];
          j++;
        } else {
          break;
        }
      } else {
        resultado += mascara[i];
      }
    }

    input.value = resultado;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // ALUNO
  const cpfAluno      = document.getElementById("cpfAluno");
  const contatoAluno  = document.getElementById("contatoAluno");
  const cepAluno      = document.getElementById("cepAluno");

  if (cpfAluno)     aplicarMascara(cpfAluno, "###.###.###-##");
  if (contatoAluno) aplicarMascara(contatoAluno, "(##)#####-####");
  if (cepAluno)     aplicarMascara(cepAluno, "#####-###");

  // PROFESSOR
  const cpfProfessor      = document.getElementById("cpfProfessor");
  const contatoProfessor  = document.getElementById("contatoProfessor");
  const cepProfessor      = document.getElementById("cepProfessor");

  if (cpfProfessor)     aplicarMascara(cpfProfessor, "###.###.###-##");
  if (contatoProfessor) aplicarMascara(contatoProfessor, "(##)#####-####");
  if (cepProfessor)     aplicarMascara(cepProfessor, "#####-###");

  // ADMINISTRADOR
  const cpfAdm      = document.getElementById("cpfAdm");
  const contatoAdm  = document.getElementById("contatoAdm");
  const cepAdm      = document.getElementById("cepAdm");

  if (cpfAdm)     aplicarMascara(cpfAdm, "###.###.###-##");
  if (contatoAdm) aplicarMascara(contatoAdm, "(##)#####-####");
  if (cepAdm)     aplicarMascara(cepAdm, "#####-###");
});

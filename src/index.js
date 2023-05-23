import cipher from './cipher.js';

window.addEventListener("load", inicio, true);

function inicio() {
  document.getElementById("mensaje1").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();
  });

  document.getElementById("mensaje2").addEventListener("keyup", function () {
    this.value = this.value.toUpperCase();

  });

  document.getElementById("cifrar").addEventListener("click", function () {
    const texto = document.getElementById("mensaje1").value;
    const saltosCi = document.getElementById("saltos").value;
    document.getElementById("resultado").value = cipher.code(texto, saltosCi);

  }, true);

  document.getElementById("descifrar").addEventListener("click", function () {
    const textoDes = document.getElementById("mensaje2").value;
    const saltosDes = document.getElementById("saltos").value;
    document.getElementById("resultadodes").value = cipher.encode(textoDes, saltosDes);

  }, true);
}


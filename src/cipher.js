const cipher = {
  code: function (texto, saltosCi) {
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    saltosCi = (saltosCi % 26);

    if (texto) {

      for (let i = 0; i < texto.length; i++) {
        if (letras.indexOf(texto[i]) !== -1) {
          const posicion = ((letras.indexOf(texto[i]) + saltosCi) % 26);
          //
          resultado += letras[posicion];
        }
        else
          resultado += texto[i];
      }
    }
    return resultado;

  },


  encode: function (textoDes, saltosDes) {
    let resultadoDes = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    saltosDes = ((saltosDes % 26) - 26) % 26;

    if (textoDes) {

      for (let i = 0; i < textoDes.length; i++) {
        if (letras.indexOf(textoDes[i]) !== -1) {
          const posicionDes = (letras.indexOf(textoDes[i]) - saltosDes) % 26;

          resultadoDes += letras[posicionDes];
        }
        else {
          resultadoDes += textoDes[i];
        }
      }
    }
    return resultadoDes;

  }
}
export default cipher


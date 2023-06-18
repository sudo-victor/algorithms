
function gerarArrayDesordenado(tamanho) {
  var arrayDesordenado = [];
  
  for (var i = 0; i < tamanho; i++) {
    arrayDesordenado.push(Math.floor(Math.random() * 1000) + 1);
  }
  
  return arrayDesordenado;
}

function gerarListaOrdenada(valorMaximo) {
  var listaOrdenada = [];

  for (var i = 1; i <= valorMaximo; i++) {
    listaOrdenada.push(i);
  }

  return listaOrdenada;
}

module.exports = {gerarArrayDesordenado, gerarListaOrdenada};

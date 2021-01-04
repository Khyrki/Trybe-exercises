const estados = document.querySelector('#estado');
const listaEstados = ['Acre','Alagoas','Amapá','Amazonas','Bahia','Ceará','Espírito Santo','Goiás','Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais','Pará','Paraíba','Paraná','Pernambuco','Piauí','Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima','Santa Catarina','São Paulo','Sergipe','Tocantins','Distrito Federal'];

function createStateList() {
  for (let index = 0; index < listaEstados.length; index += 1) {
    const criaEstado = document.createElement('option');
    estados.appendChild(criaEstado);
    criaEstado.innerText = listaEstados[index];
  }
}
createStateList();

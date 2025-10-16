// Insira a função aqui
function obtenhaMensagem(quantidadeDeItens) {
  if(quantidadeDeItens < 0) {
    return "Número inválido"
  }
  if(quantidadeDeItens === 0) {
    return "Você não tem nenhum item em sua lista de compras"
  }
  if(quantidadeDeItens === 1) {
    return "Você tem 1 item em sua lista de compras"
  }
  if(quantidadeDeItens > 1) {
    return "Você tem mais de 1 item em sua lista de compras"
  }
}
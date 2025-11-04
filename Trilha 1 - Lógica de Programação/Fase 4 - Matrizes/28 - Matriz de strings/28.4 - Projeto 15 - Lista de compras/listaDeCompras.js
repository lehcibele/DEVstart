function adicionarItem(itens, item) {
  itens.push(item)
  return itens
}
 
function exportarMinusculasCSV(itens) {
  let itemminusculasCsv = itens.map(function(item) {
    return item.toLowerCase()
  }).join(", ")

  return itemminusculasCsv
}
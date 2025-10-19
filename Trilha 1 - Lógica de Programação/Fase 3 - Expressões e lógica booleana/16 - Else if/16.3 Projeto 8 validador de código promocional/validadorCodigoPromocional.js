function eCodigoPromocionalValido(codigo) {
    if(codigo.length <= 10 && codigo.length >= 5) {
        return true
    } else {
        return false
    }
    
}
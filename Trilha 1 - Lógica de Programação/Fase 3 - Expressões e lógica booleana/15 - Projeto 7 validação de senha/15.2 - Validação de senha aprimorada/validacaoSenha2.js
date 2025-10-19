function senhaEValida(senha) {
    let senhaSemEspacos = senha.trim()
    if(senhaSemEspacos.length >= 10) {
        return true
    } else {
        return false
    }
} 
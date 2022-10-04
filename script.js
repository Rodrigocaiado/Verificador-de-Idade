function verificar(){
    var anof = document.getElementById('iano')
    var data = new Date()
    var ano = data.getFullYear()
    var res = document.getElementById('res')
    if(Number(anof.value == 0) || Number(anof.value > ano)){
        window.alert('[ERRO] Verifique os dados')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = ano - Number(anof.value)
        var genero = ''
        if(sex[0].checked){
            genero = 'Mulher'
        } else if (sex[1].checked){
            genero = 'Homem'
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
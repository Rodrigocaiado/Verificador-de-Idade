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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'Mulher'
        } else if (sex[1].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
            } else if(idade < 21) {
                // Jovem
            }else if (idade < 50) {
                // Adulto
            } else {
                // Idoso
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}
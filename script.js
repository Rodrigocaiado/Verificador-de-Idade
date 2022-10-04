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
            if(idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'kidsmulher.png')
            } else if (idade < 20){
                // Jovem
                img.setAttribute('src', 'adolescentmulher.png')
            } else if (idade < 50){
                // Adulto
                img.setAttribute('src', 'mulher.png')
            } else{
                // Idoso
                img.setAttribute('src', 'idosa.png')
            }
        } else if (sex[1].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'kidshomem.png' )
            } else if(idade < 21) {
                // Jovem
                img.setAttribute('src', 'adolescenthomem.png')
            }else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
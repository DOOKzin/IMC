document.getElementById('calcular').addEventListener('click',resultado)

function resultado(){
    var nome = document.getElementById('nome').value
    var alt = document.getElementById('altura').value
    var peso = document.getElementById('peso').value
    var result= document.getElementById('resultado')

    if (nome !== '' && alt !== '' && peso !== ''){

        var imc = (peso/(alt*alt)).toFixed(2)
        
        var pesoImc = ''

        if(imc < 18.5){
            pesoImc = 'está abaixo do peso'
        }else if(imc < 24.9){
            pesoImc = 'tem o peso normal'
        }else if(imc < 29.9){
            pesoImc = 'tem sobrepeso'
        }else if(imc < 34.9){
            pesoImc = 'tem obesidade de tipo I'
        }else if(imc < 39.9){
            pesoImc = 'tem obesidade de tipo II'
        }else{
            pesoImc = 'tem obesidade de tipo III'
        }

        result.textContent = `Olá ${nome}, seu  imc atual é de ${imc}, você ${pesoImc}`
    }else if(nome == ''){
        alert('Preencha o campo NOME para obter o resultado')
    }else if(alt == ''){
        alert('Preencha o campos ALTURA para obter o resultado')
    }else if(peso == ''){
        alert('Preencha o campos PESO para obter o resultado')
    }else{
        alert('Erro!! Tente novamenta mais tarde')
    }
} 








function clicar() {
    let num1 = document.getElementById('nota1').value
    let num2 = document.getElementById('nota2').value
    let resul = document.querySelector('#res')
    let n1 = Number(num1)
    let n2 = Number(num2)
    let soma = (n1+n2)

    if(soma/2 >= 70 && soma/2 < 100) {
        resul.innerHTML = 'Aprovado'
    } else if (soma/2 < 70) {
        resul.innerHTML = 'Reprovado'
    } else if (soma/2 == 100) {
        resul.innerHTML = 'Aprovado com distinção'
    }
}
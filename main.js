let nota1 = document.getElementById('nota1')
let nota2 = document.getElementById('nota2')
let nota3 = document.getElementById('nota3')


let form = document.getElementById('form')

let res = document.getElementById('resultado')

const limparCampos = () =>{
    nota1.value = ''
    nota2.value = ''
    nota3.value = ''
}

form.addEventListener('submit', (e)=> {
    e.preventDefault()
    calcular()

})




const calcular = ()=>{
    if((nota1.value < 0 || nota1.value >10 ) || (nota2.value < 0 || nota2.value > 10) || (nota3.value < 0 || nota3.value > 10)){
        res.innerHTML = '<b> Um dos campos estão vazios</b>'
    }else if((nota1.value === '' || nota1.value === '' ) || (nota2.value === '' || nota2.value === '') || (nota3.value === '' || nota3.value === '')){
        res.innerHTML = '<b> Os campos devem estar preenchidos </b>'
    }else{
        let media = (parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3
        res.innerHTML = `A média do aluno é ${media.toFixed(1)}`
        limparCampos()
    }
}

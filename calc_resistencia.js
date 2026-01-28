// L = comprimento do condutor [m]
// A = área de Seção Transversal [mm²]
// mat = material => resistividade do material => ro
// se for cobre = 0.017
// se for alumíno = 0.028
function calcularResistecia(L,A,mat){
    return (mat * L) / A
}
// atribui o valor do material
// se for cobre = 0.017
// se for alumíno = 0.028
function verTipoMaterial(mat){
    const cobre = 0.017
    const aluminio = 0.028
    if(mat === 'cobre'){
        return cobre
    }else if(mat === 'aluminio'){
        return aluminio
    }else{
        return 'material inválido'
    }       
}

let resposta = document.getElementById('resposta')
let calcular = document.getElementById('calcular')

calcular.addEventListener('click', ()=>{ // função principal

    let material = document.getElementById('material').value
    let comprimento = Number(document.getElementById('comprimento').value)
    let area = Number(document.getElementById('area').value)
    let resistencia = 0.0

    let mat = verTipoMaterial(material)

    resistencia = calcularResistecia(comprimento,area,mat)
    console.log(`A resitencia do condutor é ${resistencia.toFixed(3)} Ω`)

    resposta.innerHTML = ''
    resposta.innerHTML += `A resitencia do condutor é ${resistencia.toFixed(3)} Ω`
    resposta.style.fontSize = '2rem'
    resposta.style.fontWeight = 'bold'
    resposta.style.fontFamily = 'Verdana'
    resposta.innerHTML += '<hr>'
})

// a função principal foi substituída por uma arrow function ()=>

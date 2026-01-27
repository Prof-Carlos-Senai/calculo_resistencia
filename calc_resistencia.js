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

function principal(){
    let material = 'cobre'  // cobre, aluminio
    let resistencia = 0.0
    let comprimento = 1000.0
    let area = 6.0

    let mensagem = ''

    let mat = verTipoMaterial(material)
    // console.log(mat)

    resistencia = calcularResistecia(comprimento,area,mat)
    console.log(`A resitencia do condutor é ${resistencia.toFixed(3)} Ω`)



}

principal()

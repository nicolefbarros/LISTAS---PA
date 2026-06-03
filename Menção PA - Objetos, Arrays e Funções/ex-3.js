//Crie uma função que recebe um array de números representando notas e retorna a mídia final.
let notas = [7, 9.5, 5, 8.5, 10]

function calcularMedia (arrayNotas) 
{let somaTotal = 0
    
    for (let i = 0; i < arrayNotas.length; i++){
   
        somaTotal = arrayNotas[i] + somaTotal
    }

    let media = somaTotal/ arrayNotas.length
    console.log(media);
    return media
}
 calcularMedia(notas)
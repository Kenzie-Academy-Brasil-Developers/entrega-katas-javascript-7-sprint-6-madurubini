//ForEach()

function newForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
        callback(valorAtual, i, array)
    }

}


//fill()

function newFill (array , valor , inicio = 0, fim = array.length){
    for(let i = inicio; i < fim; i++){
        array[i] = valor
    }
    return array
}

//map()

function newMap (array,callback){
    let result = []
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
        result.push(callback(valorAtual, i, array))
    }
    return result

}

//some()

function newSome(array, callback){
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
         if(callback(valorAtual, i, array)) {
             return true
         }
    }
    return false

}

//find()


function newFind(array, callback){
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
        if(callback(valorAtual, i, array)){
            return valorAtual
        }
    }
}

//findIndex() 

function newFindIndex(array, callback){
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
        if(callback(valorAtual, i, array)){
            return i
        }
    }
}

//every()

function newEvery(array, callback){
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
         if(!callback(valorAtual, i, array)) {
             return false
         }
    }
    return true

}

//filter()

function newFilter(array,callback){
    let result = []
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
        if(callback(valorAtual, i, array)){
            result.push(valorAtual)
        }
        
    }
    return result

}

//concat()

function newConcat(...arrays){
    let result = []
    for(let i = 0; i < arrays.length; i++){
        for(let j = 0; j < arrays[i].length; j++){
            let valorAtual = arrays[i][j]
            result.push(valorAtual)
        }
    }

    return result
}

//includes()

function newIncludes(array, element, indiceInicial = 0){
    for(let i = indiceInicial; i < array.length; i++){
        valorAtual = array[i]
        if(valorAtual === element){
            return true
        }
    }
    return false
}

//indexOf()

function newIndexOf(array, element){
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
        if(valorAtual === element){
            return i
        }
    }
    
}

//join()

function newJoin(array){
    let valor = array.toString().split("")
    let result = ""
    for (let i = 0; i < valor.length; i++) {
        result += valor[i]
        
    }
    return result
}

//reduce()

function newReduce(array, callback, valorInicial = array[0], acumulador = valorInicial){
    for (let i = 0; i < array.length; i++) {
        let valorAtual = array[i];
        acumulador = callback(acumulador, valorAtual, i ,array)
        
    }
    return acumulador
}
//ForEach()

function newForEach(array, callback){
    for(let i = 0; i < array.length; i++){
        let valorAtual = array[i]
        callback(valorAtual, i, array)
    }

}


// Fill()

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

// some()

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

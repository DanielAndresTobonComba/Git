
let array = [1,2,3,4,5,6,7,8,9,10]


let fn = function (n){
    return String(n>5)
}


function agrupar(arr, fn) {

    let objeto = {};

   

    arr.forEach(elemento => {
        console.log(elemento)
        if (fn(elemento) in objeto) {
            objeto[`${fn(elemento)}`].push(elemento);
        } else {
            objeto[`${fn(elemento)}`] = [elemento];
        }
    });

    return objeto;
}

const result = agrupar(array, fn);

console.log(result);

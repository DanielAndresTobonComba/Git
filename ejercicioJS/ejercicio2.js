let array = [
    [1,2,3],
    [1,3,5],
    [2,5,9]
]

fn = function (list){
    return String(list[0])
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

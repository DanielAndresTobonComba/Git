
let array = [
    { "id": "1" },
    { "id": "2" },
    { "id": "3" },
    { "id": "2" },
    { "id": "1" },
    { "id": "4" },
]


let fn = function (item){
    return item.id
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

//La ecuación cuadrática se calcula de la siguiente manera: ax2 + bx + c = 0. Escribe una función que calcule el valor o los valores de una ecuación cuadrática, solveQuadEquation.
function solveQuadratic(a,b,c){
    const raices=[]
    const raiz=Math.sqrt((b*b)-(4*a*c));
    if(raiz != 0){
        raices[0]=(-b+raiz)/2*a;
        raices[1]=(-b-raiz)/2*a;
    }
    else{
        raices[0]=(-b)/(2*a);
    }
    console.log(raices);
}
console.log(solveQuadratic()); // {0}
console.log(solveQuadratic(1, 4, 4)); // {-2}
console.log(solveQuadratic(1, -1, -2)); // {2, -1}
console.log(solveQuadratic(1, 7, 12)); // {-3, -4}
console.log(solveQuadratic(1, 0, -4)); //{2, -2}
console.log(solveQuadratic(1, -1, 0)); //{1, 0}

//Declare una función llamada reverseArray. Toma un array como parámetro y retorna el array invertido (no use el método reverse()).
const reverseArray=(array) => {
    const rArray=[];
    for(let i=array.length-1;i>=0;i--){
        rArray.push(array[i]);
    }
    return rArray;
}
console.log(reverseArray([1, 2, 3, 4, 5]));
//[5, 4, 3, 2, 1]
console.log(reverseArray(["A", "B", "C"]));
//['C', 'B', 'A']

//Declare una función llamada capitalizeArray. Toma un array como parámetro y retorna el array - capitalizedarray.
const capitalizeArray = (array) => {
    const capiArray =[];
    for(const element of array){
        capiArray.push(element.toUpperCase());
    }
    return capiArray;
}
console.log(capitalizeArray(['python','javascript','java','php','nodejs']));

//Escriba una función que devuelva un array de siete números aleatorios en un rango de 0-9. Todos los números deben ser únicos.
const sevenRandomNumbers = () => {
    const randomArray=[];
    
    while(randomArray.length<7){
        const randomNum = Math.floor(Math.random()*10);

        if(!randomArray.includes(randomNum)){
            randomArray.push(randomNum);
        }
    }
    return randomArray;
}
console.log(sevenRandomNumbers());
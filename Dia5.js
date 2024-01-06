//Ejercicios: Nivel 1
const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Ethiopia",
    "Finland",
    "Germany",
    "Hungary",
    "Ireland",
    "Japan",
    "Kenya",
  ];
  
  const webTechs = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Node",
    "MongoDB",
  ];

//1_Declara un array vacío.
const void1 =Array();
const void2 = [];
//2_Declara un array com mas de 5 elementos.
const array5 =[1,2,3,4,5,6,7,8,9,10];

//3_Encuentra la longitud de tu array.
console.log(array5.length);
//4_Obtenga el primer elemento, el elemento del medio y el último elemento de un array.
console.log(array5[0]);
let midIndex=Math.round((array5.length-1)/2);
console.log(array5[midIndex]);
console.log(array5[array5.length-1]);
//5_Declara un array llamado mixedDataTypes, coloque diferentes tipos de datos en el array y encuentre la longitud del array. El tamaño del array debe ser mayor que 5.
//6_Declare un variable array de nombre itCompanies y asignarles valores iniciales Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon.
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle' , 'Amazon'];
//Imprima el array usando console.log().
console.log(itCompanies);
//Imprima el número de empresas en el array.
let cantEmp= itCompanies.length;
console.log(`En este array hay ${cantEmp} Empresas`);
//Imprime la primer empresa , la intermedia y la última empresa
console.log(itCompanies[0]);
let lastIndexIt = itCompanies.length-1;
let midIndexIt=Math.round(lastIndexIt/2);
console.log(itCompanies[midIndexIt]);
console.log(itCompanies[lastIndexIt]);
//Imprime cada empresa.
for(let i=0;i<itCompanies.length;i++)
{
    console.log(itCompanies[i]);
}
//Cambie el nombre de cada empresa a mayúsculas uno por uno e imprímalos.
const itCompaniesUpper =Array();
for(let j=0;j<itCompanies.length;j++)
{
    itCompaniesUpper[j]=itCompanies[j].toUpperCase();
    console.log(itCompaniesUpper[j]);
}
//Imprime el array como una oración: Facebook, Google, Microsoft, Apple, IBM, Oracle y Amazon son grandes empresas de TI.
//Compruebe si existe una determinada empresa en el array itCompanies. Si existe, retorna la empresa; de lo contrario, retorna la empresa no existe
let IndexIt = itCompanies.indexOf('Mercado Libre');

IndexIt === -1 
    ?console.log('La empresa indicada NO existe en este array')
    :console.log('La empresa SI existe en el array');
//Filtre las empresas que tienen más de una 'o' sin el método filter()
//Ordene el array usando el método sort()
console.log(itCompanies.sort());
//Invierte la array usando el método reverse()
console.log(itCompanies.reverse());
//Cortar las primeras 3 empresas del array
console.log(itCompanies.slice(0,3));
//Cortar las últimas 3 empresas del array
let lastIndex= itCompanies.length-1;
console.log(itCompanies.slice(lastIndex-2,itCompanies.length))
//Cortar la empresa o empresas intermedias de TI del array
//Eliminar la primera empresa de TI del array
console.log(itCompanies.shift())
//Eliminar la empresa o empresas intermedias de TI del array
//Elimine la última empresa de TI del array
console.log(itCompanies.pop())
//Eliminar todas las empresas de TI
console.log(itCompanies.splice())

//Ejercicios: Nivel 3
//El siguiente es un array de 10 edades de estudiantes:

//```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//```

//- Ordene el array y encuentre la edad mínima y máxima
const agesSort = ages.sort();
console.log(agesSort);
console.log('La edad minima es:',agesSort[0]);
console.log('La edad maxima es:',agesSort[agesSort.length-1]);
//- Encuentre la edad media (un elemento intermedio o dos elementos intermedios divididos por dos)
//- Encuentre la edad promedio (todos los elementos divididos por el número de elementos)
//- Encuentre el rango de las edades (max menos min)
//- Compare el valor de (mín - promedio) y (máx - promedio), use el método _abs()_
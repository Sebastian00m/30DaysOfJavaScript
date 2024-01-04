//Ejercicio: Nivel 1
//1_Declare una variable llamada desafío y asígnele un valor inicial '30 días de JavaScript'.
let desafio='30 days of JavaScript';
//2_Imprima la cadena en la consola del navegador usando console.log()
console.log(desafio);
//3_Imprima la longitud de la cadena en la consola del navegador usando console.log()
console.log(desafio.length);
//4_Cambie todos los caracteres de cadena a letras mayúsculas usando el método toUpperCase()
console.log(desafio.toUpperCase());
//5_Cambie todos los caracteres de la cadena a letras minúsculas usando el método toLowerCase()
console.log(desafio.toLowerCase());
//6_Corta (segmenta) la primera palabra de la cadena usando el método substr() o substring()
console.log(desafio.substring(0,2));
//7_Corta la frase Days Of JavaScript de 30 Days Of JavaScript.
console.log(desafio.substring(3,21));
//8_Verifique si la cadena contiene una palabra Script usando el método includes()
console.log(desafio.includes("Script"));
//9_Divide la cadena en un array usando el método split()
console.log(desafio.split(" "));
//Divida la cadena 30 días de JavaScript en el espacio usando el método split()
//11_'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' divide la cadena en la coma y cámbiala a una matriz.
let redesSociales= 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(redesSociales.split(','));
//12_Cambie 30 días de JavaScript a 30 días de Python usando el método replace().
console.log(desafio.replace('JavaScript','Python'));
//13_¿Qué es el carácter en el índice 15 en la cadena '30 días de JavaScript'? Utilice el método charAt().
console.log(desafio.charAt(15));
//14_¿Cuál es el código de carácter de J en la cadena '30 días de JavaScript' usando charCodeAt()
console.log(desafio.charCodeAt(desafio.charAt(11)));
//15_Use indexOf para determinar la posición de la primera aparición de a en 30 días de JavaScript
console.log(desafio.indexOf('a'));
//16_Utilice lastIndexOf para determinar la posición de la última aparición de a en 30 días de JavaScript.
console.log(desafio.lastIndexOf('a'));
//16_Usa indexOf para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let why='No puedes terminar una oración con porque porque porque es una conjunción';
console.log(why.indexOf('porque'));
//17_Usa lastIndexOf para encontrar la posición de la última aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(why.lastIndexOf('porque'));
//18_Usa buscar para encontrar la posición de la primera aparición de la palabra porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(why.search('porque'));
//19_Use trim() para eliminar cualquier espacio en blanco final al principio y al final de una cadena. Por ejemplo, '30 días de JavaScript'.
console.log(desafio.trim(' '));
///20_Use el método startsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.startsWith('30'));
//21_Use el método endsWith() con la cadena 30 días de JavaScript y haga que el resultado sea verdadero
console.log(desafio.endsWith('JavaScript'));
//22_Usa el método match() para encontrar todos los a en 30 días de JavaScript
console.log(why.match('porque'));
//23_Use concat() y fusione '30 días de' y 'JavaScript' en una sola cadena, '30 días de JavaScript'
let primera='30 dias de';
console.log(primera.concat(' JavaScript'));
//24_Use el método repeat() para imprimir 30 días de JavaScript 2 veces
console.log(desafio.repeat(2)); 

//Ejercicio: Nivel 2
//1_Usando console.log() imprima la siguiente declaración:
let frase="The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
console.log(frase);
//2_Usando console.log() imprima la siguiente cita de la Madre Teresa:
let frase2="Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(frase2);
//Compruebe si typeof '10' es exactamente igual a 10. Si no, hágalo exactamente igual.
//Compruebe si parseFloat('9.8') es igual a 10, si no, hágalo exactamente igual a 10.
//Verifique si 'on' se encuentra tanto en Python como en la jerga
let faiton='Python'
console.log(faiton.indexOf('on'));
//6_'Espero que este curso no esté lleno de jerga'. Compruebe si jargon está en la oración.
let jerga='Espero que este curso no esté lleno de jerga'
console.log(jerga.indexOf('jargon'));
//7_Genere un número aleatorio entre 0 y 100 inclusive.
let randomNumb=Math.random();
console.log(randomNumb);
//8_Genere un número aleatorio entre 50 y 100 inclusive.
let randN2=(randomNumb*(101-50))+50;
let randN22=Math.floor(randN2);
console.log(randN22);
//9_Genere un número aleatorio entre 0 y 255 inclusive.
let randN3=randomNumb*256;
let randN33=Math.floor(randN3);
console.log(randN33);

//10_Acceda a los caracteres de la cadena 'JavaScript' utilizando un número aleatorio.
let js='JavaScript';
let cantch=js.length;
let rNum=Math.floor(randomNumb*(cantch-1));
console.log(rNum);
console.log(js.charAt(rNum));
//11_
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

//Ejercicios: Nivel 3
//1_'El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor. Cuente el número de palabras amor en esta oración.
let amor='El amor es lo mejor que hay en este mundo. Algunos encontraron su amor y algunos todavía están buscando su amor'
let pattern=/amor/gi;
console.log(amor.match(pattern));
let cant=(amor.match(pattern)).length;
console.log(`la frase anterior posee la palabra amor ${cant} veces`);

//2_Usa match() para contar el número de todos los porque en la siguiente oración:'No puedes terminar una oración con porque porque porque es una conjunción'
let porque='No puedes terminar una oración con porque porque porque es una conjunción';
let pattern1=/porque/gi;
console.log((porque.match(pattern1)).length);

//3_Limpia el siguiente texto y encuentra la palabra más frecuente (pista, usa replace y expresiones regulares).
const sentence ="%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
const hash=/#/g;
const amp=/&/g;
const porc=/%/g;
const arro=/@/g;
const plata=/\$/g;
const dotcoma=/;/g;
const excla=/!/g;

const sentenceCorregida=sentence.replace(hash,'').replace(amp,'').replace(porc,'').replace(arro,'').replace(plata,'').replace(excla,'').replace(dotcoma,'');
console.log(sentenceCorregida);

//4_Calcula el ingreso anual total de la persona extrayendo los números del siguiente texto. 'Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let txt='Él gana 5000 euros de salario por mes, bono anual de 10000 euros, cursos en línea de 15000 euros por mes.'
let ingresos=txt.match(/\d+/g);
console.log(txt.match(/\d+/g));
let salXmes=ingresos[0];
let bonAnual=ingresos[1];
let curEnlinea=ingresos[2];
console.log(`El ingreso anual total es de ${((salXmes+curEnlinea)*12)+bonAnual} euros`);
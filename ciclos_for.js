let Lenguajes = ['Python','Java','JavaScript','Php','SQL'];

//ciclo for comun
for(let i=0 ; i<Lenguajes.length ; i++){
    if(Lenguajes[i] === "Php"){
        //break;
        continue;
        //permite usar "break" y "continue"
    }
    console.log(Lenguajes[i]);
    //nos obliga a usar los index   
}
Lenguajes.forEach((el,index) => console.log(`el ${index} index con valor ${el}`));

//ciclo forEach
Lenguajes.forEach((lenguaje) => {
    //No nos permite usar ni "continue" ni "break"
    console.log(lenguaje);
});
//al utilizar una ArrowFunction nos permite hacer lo siguiente
Lenguajes.forEach(lenguaje => console.log(lenguaje));

//ciclo "for in"(mejor utilizado para objetos)
//ya que puede mostrarme las propiedades con sus respectivos valores que se agregan durante el codigo
Lenguajes.numero =2;
for(const index in Lenguajes){
    //debemos utilizar un elemento com "index" para iterar el array
    console.log(Lenguajes[index]);
    //nos permite usa "continue" y "break"
}

//ciclo "for of"
//no puede mostrarme propiedades agregadas durante el codigo que no pertenezcan al array original
for(const lenguaje of Lenguajes){
    //si me permite usar "break" y "continue"
    //no necesito un elemento com index para iterar
    console.log(lenguaje);
}
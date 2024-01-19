//Imagina que estás obteniendo la colección de usuarios anterior de una base de datos MongoDB. 
//a. Crear una función llamada signUp que permita al usuario añadirse a la colección.
// Si el usuario existe, informar al usuario que ya tiene una cuenta.
usersNew = [
    {
      _id: "ab12ex",
      username: "Alex",
      email: "alex@alex.com",
      password: "123123",
      createdAt: "08/01/2020 9:00 AM",
      isLoggedIn: false,
    },
    {
      _id: "fg12cy",
      username: "Asab",
      email: "asab@asab.com",
      password: "123456",
      createdAt: "08/01/2020 9:30 AM",
      isLoggedIn: true,
    },
    {
      _id: "zwf8md",
      username: "Brook",
      email: "brook@brook.com",
      password: "123111",
      createdAt: "08/01/2020 9:45 AM",
      isLoggedIn: true,
    },
    {
      _id: "eefamr",
      username: "Martha",
      email: "martha@martha.com",
      password: "123222",
      createdAt: "08/01/2020 9:50 AM",
      isLoggedIn: false,
    },
    {
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
      createdAt: "08/01/2020 10:00 AM",
      isLoggedIn: false,
    },
  ];
  const singUp = (name,mail,psw) => {
    
    for(const user of usersNew){
      //console.log(user.username);
      if(user.email === mail){
        return `Ya existe este mail`;
      }
    }
  
    let path = 'abcdefghjkmnpqrstuvwxyz';
    let rand=[];
  
    for(const chr of '______'){
      let random=Math.floor(Math.random()*path.length);
      rand.push(path[random]);
    }
    let id=rand.join("");
  
    const ahora = new Date();
    let dia = ahora.getDate();
    let mes = ahora.getMonth();
    let año = ahora.getFullYear();
    let hrs = ahora.getHours();
    hrs < 10 ? '0'+hrs.toString() : hrs;
    let mts = ahora.getMinutes();
    mts < 10 ? '0'+mts.toString() : mts;
  
    let created = `${dia}/${mes}/${año} ${hrs>12 ?  (hrs-12).toString() +':'+mts.toString() + 'PM' : hrs.toString() +':'+mts.toString() + 'AM'}`;
  
    const userData = {
      _id: id,
      username: name,
      email: mail,
      password: psw,
      createdAt: created,
      isLoggedIn: false,
    }
    usersNew.push(userData);
    
  }
  singUp("Mauro","mauro@montaño.com",1234);
  console.log(usersNew);
  //b. Crear una función llamada signIn que permita al usuario iniciar sesión en la aplicación
  let singIn =(mail,psw) => {
    for(const user of usersNew){
        //console.log(user.username);
        if(user.email == mail && user.password == psw){
            user.isLoggedIn=true;
          return `Has iniciado Session, !!!!!Bienvenido!!!!`;
        }
    }
    return `mail o contraseña equivocados`;
  }
  console.log(singIn("Yo","mio@yo"));
  console.log(singIn("mauro@montaño.com",1234));
  console.log(usersNew);
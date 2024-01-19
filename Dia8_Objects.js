//Ejercicios: Nivel 2


//Contar los usuarios conectados, contar los usuarios que tienen más de 50 puntos del siguiente objeto.

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
};


// Iterar sobre cada usuario en el objeto users
const userSkillsInfo = {};

for (const username in users) {
    if (users.hasOwnProperty(username)) {
      // Obtener la cantidad de skills del usuario actual
      const userSkillsCount = users[username].skills.length;
      
      // Almacenar el nombre de usuario y la cantidad de skills en el objeto userSkillsInfo
      userSkillsInfo[username] = userSkillsCount;
    }
  }
  
  // Mostrar el nuevo objeto con el nombre de usuario y la cantidad de skills de cada uno
  console.log(userSkillsInfo);
//Encuentra a la persona que tiene muchas habilidades en el objeto de los usuarios.
const getUserWithMaxSkills = (userInfo) => {
    let userMax = '';
    let maxSkills = 0;
    for(let user in userInfo){
        if(userInfo.hasOwnProperty(user)){
            if(userInfo[user]>maxSkills){
                maxSkills=userInfo[user];
                userMax=user;
            }
        }
    }
    console.log(`El usuario ${userMax} poseé la mayor cantidad de skills de ${maxSkills}`);
}
console.log(getUserWithMaxSkills(userSkillsInfo));

//Encontrar personas que sean desarrolladores MERN stack del objeto de los usuarios
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
console.log("puto");

for (const user in users) {
  let isMernsDev = true;
  //console.log(`${user}'s skills: ${users[user].skills.join(', ')}`);
  for(const mern of mernStack) {
    //console.log(mernStack[mern]);
    if(!users[user].skills.includes(mern)){
      isMernsDev= false;
      break;
    }
  }
  if(isMernsDev){
    console.log(`El user : ${user} ES desarrollador MERN!!!`);
  }else {
     console.log(`El user : ${user} NO ES desarrollador MERN....`);
  }
 
  //console.log(users[user].skills);
}

//Preguntas:2, 3 y 4 se basan en los siguientes dos arrays: users y products ()






const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
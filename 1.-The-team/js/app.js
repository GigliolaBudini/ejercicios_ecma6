

         // ES5

// declaracion de las variables

// var [teachersTeam, members] = [
//   'formacion',
//      ['Amalia',
//       'Karla',
//       'Silvana',
//       'Manu',
//       'Jonh',
//       'Mike'
//     ],
// ];
//
// var formatTeamMessage = function (teachersTeam, members) {
//   var message = 'Hay ' + members.length + " " + 'personas en el equipo de' + " " + teachersTeam + "\n" + "Ellos son" + " " + members.join(", ") + ".";
//   console.log(message)
//   return message;
// };

//formatTeamMessage(teachersTeam, members);

// Ahora comenta todo el código anterior y escribelo en ES6


                            //  ES6
// declaracion de las variables

const [teamName, product] = [
  'formacion', ['Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
];


const formatTeamMessage = (teamName, people) => {
  var mensaje = `Hay ${people.length} personas en el equipo de ${teamName} \n
                 Ellos son ${people.join(",")}`;
  return mensaje;
}

formatTeamMessage(teamName, product);
console.log(formatTeamMessage(teamName, product));

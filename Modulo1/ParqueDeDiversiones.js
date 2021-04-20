let readline = require("readline-sync");
const AlturaMinima=180;
let altura=readline.questionInt("Ingrese Altura (cm)");

if (altura>=AlturaMinima){
    console.log("Puede pasar");
}
else{
    console.log("No puede pasar"); 
}

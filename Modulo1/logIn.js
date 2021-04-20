let readline = require("readline-sync");
const Usuario="juan";
const Contrasena="clavejuan";
let UsuarioIngresado=readline.question("Ingrese Usuario");
let ContrasenaIngresada=readline.question("Ingrese Contrasena");


if ((Usuario==UsuarioIngresado) && (Contrasena==ContrasenaIngresada)){
    console.log("Bienvenido",UsuarioIngresado);
}
else{
    if((Usuario!=UsuarioIngresado) && (Contrasena!=ContrasenaIngresada)){
        console.log("Usuario Incorrecto y Contrasena Incorrecto");
    }else{
    
        if (ContrasenaIngresada!=Contrasena){
            console.log("Contrasena Incorrecto");
        }
        else{
            console.log("Usuario Incorrecto");
        }
    }
    
    
}
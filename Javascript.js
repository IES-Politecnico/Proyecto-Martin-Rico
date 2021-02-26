function verifica(){
    if (document.registro.contraseña.value == document.registro.repite_contraseña.value){
        document.getElementById("coincide").innerText = "Las contraseñas coinciden"
        document.getElementById("coincide").style.color = "#00ff00"
    }
    else {
        document.getElementById("coincide").innerText = "Las contraseñas no coinciden"
        document.getElementById("coincide").style.color = "#ff0000"
    }
}
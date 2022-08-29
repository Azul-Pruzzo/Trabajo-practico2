console.log("hola");

let usuario = "";
let visitas = 0;
let ver;
usuario=usuario.trim();

let click = document.querySelector("#TITLE")

function identificarUsuario(){
usuario = prompt("Ingrese su nombre");
localStorage.setItem("usuario", JSON.stringify(usuario));
if(usuario === null || usuario === ""){
    while (usuario === "" || usuario === null){
        alert ("Debe ingresar su nombre para identificarse");
        usuario = prompt ("Ingrese su nombre");
        localStorage.setItem("usuario", JSON.stringify("usuario"));
        ver = JSON.parse(localStorage.getItem("usuario"));
        document.querySelector("#TITLE").innerHTML = " Bienvenido " + ver;
    }
} else{
    ver =JSON.parse(localStorage.getItem("usuario"));
    document.querySelector("#TITLE").innerHTML = " Bienvenido " + ver;
}
}
click.addEventListener("click", identificarUsuario);

function name(params) {
    function contador(){
        visitas = visitas + 1;
        localStorage.setItem("contador", JSON.stringify(visitas));
       let visitas = localStorage.getItem("contador")
        document.querySelector("#visitas").innerHTML = "visitas" + visitas;
    }
    contador()
}

function iniciar(){
    ver = JSON.parse(localStorage.getItem("usuario"));
    if (ver === null || ver ===""){
        document.querySelector(".ver").innerHTML ="click para identificarse";
    } else{
        ver = JSON.parse(localStorage.getItem("usuario"));
        document.querySelector("#TITLE").innerHTML = "Bienveenido" + ver;
    }
}
iniciar();
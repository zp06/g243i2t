const btnLogin = document.querySelector("#btnLogin");
const inputUsuario = document.querySelector("#usuario");
const inputSenha = document.querySelector("#Senha");
let usuarioLogado = null;

(()=>{
   usuarioLogado = localStorage.getItem("usuario");
   if(usuarioLogado){
    window.location.href = "/logado.html";
   } 
})();
btnLogin.onclick = () =>{
    let usuario = inputUsuario.value;
    let senha = inputSenha.value;
    if(usuario){
        if(usuario === "raul"){

        }
        if(senha === "123"){
            window.location.href = "/logado.html";
        }
    }else{
        inputUsuario.focus();
    }
}
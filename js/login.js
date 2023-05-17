//CRIANDO OBJETOS
const usuario1 = {
    usuarioEmail : "jaul@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

const usuario2 = {
    usuarioEmail : "bkzin@email.com",
    usuarioSenha : "12345",
    usuarioGenero : "m",
    gravarDados : true
}

//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [];
listaDeUsuarios.push(usuario1);
listaDeUsuarios.push(usuario2);
console.log(listaDeUsuarios);

addEventListener("click", (evt)=>{
    
    const inputEmail = document.querySelector("#idEmail");
    const inputPass = document.querySelector("#idPass");
    
    if(evt.target.id == "btnSubmit"){

        try {
            
            listaDeUsuarios.forEach((usuario)=>{
     
                if(inputEmail.value == usuario.usuarioEmail && inputPass.value == usuario.usuarioSenha){
                    throw "VALIDADO";
                }
            });

            throw "NÃO VALIDADO";

        } catch (msg) {
            const msgStatus = document.querySelector("#msgStatus");
            
            if(msg == "VALIDADO"){
                msgStatus.setAttribute("style","color:#00ff00;");
                msgStatus.innerHTML = "<span><strong>Login efetuado com Sucesso!</strong></span>";
            }else{
                msgStatus.setAttribute("style","color:#ff0000;");
                msgStatus.innerHTML = "<span><strong>Senha ou nome de usuário inválidos!</strong></span>";
            }
            
        }
    //Ao mostrar a senha troque o ícone também pelo ícone de olho com um traço.

    }else if(evt.target.className == "fa fa-eye" || evt.target.className == "fa fa-eye-slash"){

        if(inputPass.getAttribute("type") == "password"){
            inputPass.setAttribute("type","text");
            evt.target.setAttribute("class","fa fa-eye-slash");
        }else{
            inputPass.setAttribute("type","password");
            evt.target.setAttribute("class","fa fa-eye");
        }

    }
});
//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Guilherme Naoki Hirayama",
        usuarioEmail : "rm551456@fiap.com.br",
        usuarioSenha : "123456"
    },
];

localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));


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
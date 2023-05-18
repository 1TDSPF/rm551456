//CRIAR UMA LISTA DE OBJETOS
let listaDeUsuarios = [
    {
        nomeCompleto : "Jaú da Selva",
        usuarioEmail : "jau@email.com",
        usuarioSenha : "123456",
        usuarioAvatar : "./img/aluno-juan.jpg"
    },
    {
        nomeCompleto : "Paulo das Couves",
        usuarioEmail : "paulo@email.com",
        usuarioSenha : "123456",
        usuarioAvatar : "./img/usuario-padrao.png"
    },
    {
        nomeCompleto : "José da Silva",
        usuarioEmail : "jose@email.com",
        usuarioSenha : "123456",
        usuarioAvatar : "./img/usuario-padrao.png"
    },
    {
        nomeCompleto : "Maria do Socorro",
        usuarioEmail : "maria@email.com",
        usuarioSenha : "123456",
        usuarioAvatar : "./img/usuario-padrao.png"
    },
    {
        nomeCompleto : "André da Silva",
        usuarioEmail : "andre@email.com",
        usuarioSenha : "123456",
        usuarioAvatar : "./img/usuario-padrao.png"
    }
];

//ADICIONANDO A LISTA DE OBJETOS AO LOCAL-STORAGE
localStorage.setItem("listaUser", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt)=>{
    
    const inputEmail = document.querySelector("#idEmail");
    const inputPass = document.querySelector("#idPass");
    
    //CRIANDO UM OBJETO PARA ARMAZENAR OS DADOS QUE VIERAM DO FORM.
    const userLogado = {
        emailUserLogado : inputEmail.value,
        senhaUserLogado : inputPass.value
    }

    //CRIANDO UM OBJETO PARA ARMAZENAR O USUÁRIO VALIDADO.
    let userValidado = {};

    if(evt.target.id == "btnSubmit"){

        try {
            
            let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUser"));

            listaDeUsuarios.forEach((usuario)=>{
     
                if(userLogado.emailUserLogado == usuario.usuarioEmail && userLogado.senhaUserLogado == usuario.usuarioSenha){
                    userValidado = usuario;
                    throw "VALIDADO";
                }
            });

            throw "NÃO VALIDADO";

        } catch (msg) {
            const msgStatus = document.querySelector("#msgStatus");
            
            if(msg == "VALIDADO"){
                msgStatus.setAttribute("style","color:#00ff00;");
                msgStatus.innerHTML = `<span><strong>O usuário ${userValidado.nomeCompleto} realizou o login com Sucesso!</strong></span>`;

                //ADICIONANDO O USUÁRIO-VALIDADO NO LOCAL-STORAGE
                localStorage.setItem("user-validado", JSON.stringify(userValidado));

                //CRIAR UM TOKEN DE AUTENTICAÇÃO DO USUÁRIO
                let token = Math.random().toString(16).substring(2)+Math.random().toString(16).substring(2);
                console.log(token);

                //ADICIONANDO O TOKEN NO LOCAL-STORAGE
                localStorage.setItem("token-user", token);

                //REDIRECT
                setTimeout(()=>{
                        window.location.href = "../index.html";
                }, 3000);
                
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
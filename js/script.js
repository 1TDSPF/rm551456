// // DIFERENÇA ENTRE LET/VAR/CONST
// // var nome = "Kayque";
// // if(nome == "Kayque"){
// //     let nome = "Denise";
// // }
// // console.log(nome);

// //  Recuperando um elemento button que está no index.html
// //  const btn  = document.getElementById("meu-btn");
 
// //  //Atrelando um evento de click ao button que foi recuperado.
// //  btn.addEventListener("click" , function(){

// //     //Função Matemática - Math
// //     //randon = gera números aleatórios enre 0 e 1. Ex: 0.232323;
// //     //floor  = arredonda o número para baixo.
// //     //ceil   = arredonda o número para cima.
// //     //round  = arredonda o número aleatóriamente.
// //     let r,g,b;

// //     r = Math.round(Math.random() *255);
// //     g = Math.round(Math.random() *255);
// //     b = Math.round(Math.random() *255);

// //     //Adicionando um atributo ao elemeno button
// //     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
// //     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// //  } );


// // //DESAFIO
// // //Recupere o elemento tit-sec e atrele a ele um evento de mmouse a sua escolha.
// // // Altere a cor de fundo e a cor do texto quando o evento ocorer.
// // // const h2Element = document.getElementById("meu-tit");
// // // // console.log(h2Element);

// // // h2Element.addEventListener("click", function(){
// // //     this.setAttribute("style", `background-color:#ff0000;color:#fff;`);
// // // });

// // const h2Element = document.querySelector("h2");
// // // console.log(h2Element);

// // h2Element.addEventListener("click", function(){
// //     this.setAttribute("style", `background-color:#ff0000;color:#fff;`);
// // });


// //Declarando um array
// let frutas = ["maçã","laranja","banana","uva","kiwi","caqui"];
// //Imprimindo o array
// console.log(frutas);
// //Para verificar o tamanho do array utilizamos a propriedade length
// console.log("Tamanho do Array " + frutas.length);
// //Imprimindo um item especifico do array.
// console.log("Pegando um dos itens do Array : " + frutas[0]);
// console.log("Pegando um dos itens do Array : " + frutas[1]);
// console.log("Pegando um dos itens do Array : " + frutas[2]);
// console.log("Pegando um dos itens do Array : " + frutas[3]);
// console.log("Pegando um dos itens do Array : " + frutas[4]);
// console.log("Pegando um dos itens do Array : " + frutas[5]);

// //Iterando o array com estruturas de repetição:
// //forEach
// frutas.forEach( (fruta)=>{
//     console.log("Pegando um dos itens do Array com forEach: " + fruta);
// } );

// //Adicionado um item ao final do array com o método push(item);
// frutas.push("melão");
// console.table(frutas);

// //Adicionado um item no início do array com o método unshift(item);
// frutas.unshift("melancia");
// console.table(frutas);

// //Removendo um item do final do array com o método pop();
// frutas.pop();
// console.table(frutas);

// //Removendo um item do inicio do array com o método pop();
// frutas.shift();
// console.table(frutas);

// //Localizando um determinando item dentro do array com o método indexOf(item);
// // let indice = frutas.indexOf("banana");
// // console.log("INDICE ONDE FOI LOCALIZADO O ITEM : " + indice);
// // console.log("ITEM QUE FOI LOCALIZADO NO ARRAY : " + frutas[indice]);

// //Utilizando os métodos, slice(indiceItem, quantidadeRemoções) para remover um item do array passando sua localizaçao através do indice.
// //Localizando um determinando item dentro do array com o método indexOf(item);
// let indice = frutas.indexOf("banana");
// console.log("ITEM QUE ESTAVA NO LOCAL ANTES DA REMOÇÃO : " + frutas[indice]);
// frutas.splice(indice,2);
// console.table(frutas);
// console.log("ITEM QUE FICOU NO LOCAL APÓS A REMOÇÃO : " + frutas[indice]);

// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log(nr1);
// console.log(nr2);
// //CONCATENANDO ARRAYS
// let nr3 = [nr1,nr2];
// console.log("NOVO ARRAY : " + nr3);
// //Imprimindo o Array concatenado com forEach
// nr3.forEach((nr)=>{
//     nr.forEach((n)=>{
//         console.log("ITEM DO NOVO ARRAY : " + n);
//     })
// })
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log(nr1);
// console.log(nr2);
// //CONCATENANDO ARRAYS COM O OPERADOR SPREAD( ... )
// let nr3 = [...nr1,...nr2];
// // //Imprimindo o Array concatenado com forEach
// nr3.forEach((nr)=>{
//     console.log("ITEM DO NOVO ARRAY : " + nr);    
// });

//convertendo HTMLCollection em Arrays
// const imgElements = document.getElementsByTagName("img");
// console.log(imgElements);
// const imgElementsArray = [...imgElements];
// imgElementsArray.forEach((img)=>{
//     img.setAttribute("width","3%");
// });

//Recupere uma colections de elementos do tipo ( a ).
// Identifique aqueles que são pertencentes somente ao cabeçalho e adicione o atributo style com a propriedade background-color:#ff0000;
//Tire um print do código e da página alterada envie no chat!

// const aElements = [...document.getElementsByTagName("a")];

// aElements.forEach((a)=>{
//     let textoDoA = a.textContent;
//     if(textoDoA == "Home" || textoDoA == "Info" || textoDoA == "Item-3"){
//         a.setAttribute("style","background-color:#ff0000;")
//     }
// });


//CRIANDO A AUTENTICAÇÃO PELO TOKEN
if(localStorage.getItem("token-user") != null ){

    //RECUPERANDO O H1 que vai apresentar o usuário!
    const msgStatus = document.querySelector("#msg");

    const avatar = document.querySelector("#imgAvatar");
    
    //RECUPERANDO O OBJETO DO USUÁRIO-VALIDADO NO LOCAL-STORAGE
    const usuarioValidado = JSON.parse(localStorage.getItem("user-validado"));

    //APRESENTANDO UMA DOS ATRIBUTOS DO OBJETO
    msgStatus.innerHTML = usuarioValidado.nomeCompleto;
    avatar.setAttribute("src",usuarioValidado.usuarioAvatar);

    //BOTÃO LOGOUT
    const botaoSair = document.querySelector("#btnSair");
    botaoSair.setAttribute("style","display:block");
    botaoSair.addEventListener("click",()=>{
       //REMOVENDO O TOKEN E O USUÁRIO-VALIDADO DO LOCAL-STORAGE 
       localStorage.removeItem("token-user");
       localStorage.removeItem("user-validado");
       //Após deslogar o usuário redirecionar ele para a página de LOGIN
       window.location.href = "../login.html";
    });
}else{
    window.location.href = "../login.html";
}
 


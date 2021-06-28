function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

function setaImagem(){
    var settings = {
        primeiraImg: function(){
            elemento = document.querySelector("#slider a:first-child");
            elemento.classList.add("ativo");
        },
        slide: function(){
            elemento = document.querySelector(".ativo");
            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }
        },
        proximo: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.nextElementSibling){
                elemento.nextElementSibling.classList.add("ativo");
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");
                settings.primeiraImg();
            }
            intervalo = setInterval(settings.slide,4000);
        },
        anterior: function(){
            clearInterval(intervalo);
            elemento = document.querySelector(".ativo");

            if(elemento.previousElementSibling){
                elemento.previousElementSibling.classList.add("ativo");
                elemento.classList.remove("ativo");
            }else{
                elemento.classList.remove("ativo");                     
                elemento = document.querySelector("a:last-child");
                elemento.classList.add("ativo");
            }
            intervalo = setInterval(settings.slide,4000);
        },
    }

    //chama o slide
    settings.primeiraImg();

    //chama o slide à um determinado tempo
    var intervalo = setInterval(settings.slide,4000);
    document.querySelector(".next").addEventListener("click",settings.proximo,false);
    document.querySelector(".prev").addEventListener("click",settings.anterior,false);
}

window.addEventListener("load",setaImagem,false);

function formulario(){
    const nome = document.getElementById("nome");
    const email = document.getElementById("email");
    const celular = document.getElementById("celular");
    const assunto = document.getElementById("assunto");
    const mensagem = document.getElementById("mensagem");
    const form = document.getElementsByName("f1");
    
    let corErro = "rgb(234 130 130)"    
    const valores = nome.value != '' && email.value != '' && celular.value != '' && assunto.value != 'selecione' && mensagem.value != '';

    if (valores) {
        alert("Obrigado - Formulário enviado com Sucesso!");
        
        nome.value = '';
        email.value = '';
        celular.value = '';
        assunto.value = 'selecione';
        mensagem.value = '';
        
    }else {
        
        if (nome.value == '') {
            nome.style.backgroundColor = corErro;
            nome.onkeyup = function(){
                nome.style.backgroundColor = "";
            }
        }
        
        if (email.value == '') {
            email.style.backgroundColor = corErro;
            email.onkeyup = function(){
                email.style.backgroundColor = "";
            }
        }

        if (celular.value == '') {
            celular.style.backgroundColor = corErro;
            celular.onkeyup = function(){
                celular.style.backgroundColor = "";
            }
        }

        if (assunto.value == 'selecione') {
            assunto.style.backgroundColor = corErro;
            assunto.onchange = function(){
                assunto.style.backgroundColor = "";
            }
        }

        if (mensagem.value == '') {
            mensagem.style.backgroundColor = corErro;
            mensagem.onkeyup = function(){
                mensagem.style.backgroundColor = "";
            }
        }
    }

}

function mascara(o,f){
    v_obj=o
    v_fun=f
    setTimeout("execmascara()",1);
}

function execmascara(){
    v_obj.value=v_fun(v_obj.value);
}

function mtel(v){
    v=v.replace(/\D/g,"");
    v=v.replace(/^(\d{2})(\d)/g,"($1) $2");
    v=v.replace(/(\d)(\d{4})$/,"$1-$2");
    return v;
}

function id( el ){
	return document.getElementById( el );
}

window.onload = function(){
	id('celular').onkeyup = function(){
		mascara( this, mtel );
	}
}

let btn = document.querySelector(".btn");

btn.addEventListener("click", formulario);
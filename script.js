const tratamento = document.querySelector("#textoinput");

tratamento.addEventListener("keypress",function(e){
    if(!checkChar(e)){
        e.preventDefault();
    }
}
);
function checkChar(e){
    const char =String.fromCharCode(e.keyCode);
    const pattern ='[a-z ]';
    
    if(char.match(pattern)){
        console.log(char);
        return true;
    }
}
const pegar = document.querySelector("#btncrip");
 pegar.addEventListener('click',function(e){
     e.preventDefault();

     const nova = document.querySelector("#textoinput");
     const valor = nova.value;
     var vogais = valor;

     vogais = vogais.replaceAll(/e/gi,'enter');
     vogais = vogais.replaceAll(/i/gi,'imes');
     vogais = vogais.replaceAll(/a/gi,'ai');
     vogais = vogais.replaceAll(/o/gi,'ober');
     vogais = vogais.replaceAll(/u/gi,'ufat');
     
     document.querySelector("#msg").value = vogais;
     console.log(vogais); 
 }
 )
const voltar = document.querySelector("#btndecrip");
voltar.addEventListener('click',function(e){
    e.preventDefault();

    const retorno = document.querySelector("#textoinput");
    const valor = retorno.value;
    var vogais = valor;
    
    vogais = vogais.replaceAll(/enter/gi,'e');
    vogais = vogais.replaceAll(/imes/gi,'i');
    vogais = vogais.replaceAll(/ai/gi,'ai');
    vogais = vogais.replaceAll(/ober/gi,'o');
    vogais = vogais.replaceAll(/ufat/gi,'u');

    document.querySelector("#msg").value = vogais;
    console.log(vogais);
}
)
const copiar = document.querySelector("#btncopiar");
 copiar.addEventListener('click',function (e){
     e.preventDefault();

          const textoCopy = document.querySelector("#msg");
          const resultado = textoCopy.value;
          navigator.clipboard.writeText(resultado);
          alert("prontinho!");
 })

 
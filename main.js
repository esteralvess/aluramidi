function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];
    
    const instrumento = tecla.classList[1];
    
    console.log(instrumento);

    listaDeTeclas[contador].onclick = function(){
        tocaSom('#som_tecla_pom');
    };

    contador += 1;

    console.log(contador)
}
function tocaSom(){
    document.querySelector('#som_tecla_pom').play();
}

let contador = 0;

const listaDeTeclas = document.querySelectorAll('.tecla');

while (contador < listaDeTeclas.length) {

    listaDeTeclas[contador].onclick = tocaSomPom;

    contador += 1;

    console.log(contador)
}
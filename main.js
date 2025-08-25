function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio).play();

    if (elemento === null) {
        console.log('elemento não encontrado');
    }
    else {

        if (elemento.localName === 'audio'){

        }
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
    tecla.onkeydown = function (evento) {

        if (evento.code === 'Space' || evento.code === 'Enter' ) {
            tecla.classList.add('ativa');
        } 
    }
    tecla.onkeyup = function () {
        tecla.classListremove('ativa');
    }

}

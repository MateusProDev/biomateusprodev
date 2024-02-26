const sobre = document.getElementById('sobre');
const btnGeral = document.querySelector('button:nth-of-type(1)')
const btnComida = document.querySelector('button:nth-of-type(2)')
const btnHobbies = document.querySelector('button:nth-of-type(3)')

const myGeral = () => {
    sobre.textContent= 'Me chamo Mateus, Tenho 25 anos e sou desenvolvedor Front-End, buscando uma oportunidade no mercado de programação.';
}
const myComida = () => {
    sobre.innerHTML= '<h3>As tecnologias que domino são:</h3>'+
    '<br><br>' + 'Javascript, React.js, NODE.js Bostramp, SSAS, Jquery, CSS, HTML, GitHub, NPM, Firebase, API, Responsividade, Acessibilidade, CyberSecurity.';
}
const myHobbies = () => {
    sobre.textContent= 'Tenho habito de Ler muito, buscando sempre estar atualizado com as mais novas tecnologias, me encontronto na frente do teclado nas horas vagas, buscando criar algoritimos que me possibilitem realizar aplicações e tarefas, gosto de jogar e assistir animes, programar é minha atividade favorita, seja em hambiente de trabanho ou quando somente estou em busca dos melhores algoritimos.';
}

btnGeral.onclick = myGeral;
btnComida.onclick = myComida;
btnHobbies.onclick = myHobbies;
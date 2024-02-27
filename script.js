const sobre = document.getElementById('sobre');
const btnGeral = document.querySelector('button:nth-of-type(1)');
const btnComida = document.querySelector('button:nth-of-type(2)');
const btnHobbies = document.querySelector('button:nth-of-type(3)');

const myGeral = () => {
    sobre.textContent= 'Me chamo Mateus. Tenho 25 anos e sou desenvolvedor Front-End, buscando uma oportunidade no mercado de programação.';
};

const myComida = () => {
    sobre.innerHTML= '<h3>As tecnologias que domino são:</h3>'+
    '<br>' + 'Javascript, React.js, Node.js, Bootstrap, SASS, jQuery, CSS, HTML, GitHub, NPM, Firebase, API, Responsividade, Acessibilidade e CyberSecurity.';
};

const myHobbies = () => {
    sobre.textContent= 'Tenho o hábito de ler muito, buscando sempre estar atualizado com as mais novas tecnologias. Me encontro na frente do teclado nas horas vagas, buscando criar algoritmos que me possibilitem realizar aplicações e tarefas. Gosto de jogar e assistir animes. Programar é minha atividade favorita, seja em ambiente de trabalho ou quando estou apenas buscando os melhores algoritmos.';
};

btnGeral.onclick = myGeral;
btnComida.onclick = myComida;
btnHobbies.onclick = myHobbies;

//chamada à API

fetch('http://localhost:3000/products')
.then(res => res.json())
.then(data => {
    let productsList = document.getElementById('productsList');

    // Filtrando os produtos com base na propriedade 'productA'
    let dataProductsA = data.filter(product => product.name === 'productB'); // Substitua 'valorDesejado' pelo valor que você está procurando.

    // Iterando sobre os produtos filtrados e criando elementos de lista para cada um deles
    dataProductsA.forEach(product => {
        let li = document.createElement('li');
        li.textContent = `${product.job}`;
        productsList.appendChild(li);
    });
})
.catch(error => console.error('Esse é o error:' + error));

document.addEventListener("DOMContentLoaded", function() {
    const sobre = document.getElementById('sobre');
    const btnGeral = document.querySelector('button:nth-of-type(1)');
    const btnComida = document.querySelector('button:nth-of-type(2)');
    const btnHobbies = document.querySelector('button:nth-of-type(3)');
    const nameElement = document.getElementById("nameAnimation");
    const productsList = document.getElementById('productsList');

    const myGeral = () => {
        sobre.textContent = 'Me chamo Mateus. Tenho 25 anos e sou desenvolvedor Front-End, buscando uma oportunidade no mercado de programação.';
    };

    const myComida = () => {
        sobre.innerHTML = '<h3>As tecnologias que domino são:</h3>'+
        '<br>' + 'Javascript, React.js, Node.js, Bootstrap, SASS, jQuery, CSS, HTML, GitHub, NPM, Firebase, API, Responsividade, Acessibilidade e CyberSecurity.';
    };

    const myHobbies = () => {
        sobre.textContent = 'Tenho o hábito de ler muito, buscando sempre estar atualizado com as mais novas tecnologias. Me encontro na frente do teclado nas horas vagas, buscando criar algoritmos que me possibilitem realizar aplicações e tarefas. Gosto de jogar e assistir animes. Programar é minha atividade favorita, seja em ambiente de trabalho ou quando estou apenas buscando os melhores algoritmos.';
    };

    btnGeral.onclick = myGeral;
    btnComida.onclick = myComida;
    btnHobbies.onclick = myHobbies;

    fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data => {
        // Iterating over the products and creating list elements for each of them
        data.forEach(product => {
            let li = document.createElement('li');
            li.textContent = `${product.job}`; // Assuming 'job' is the property you want to display
            productsList.appendChild(li);
        });
    })
    .catch(error => console.error('Esse é o error:' + error));

    const name = "Ferreira";
    const letters = name.split(""); // Separate each letter of the name

    // Function to toggle displaying and hiding the letters
    const toggleLetters = () => {
        letters.forEach((letter, index) => {
            setTimeout(() => {
                // Create a span element for each letter
                let span = document.createElement('span');
                span.textContent = letter;
                span.classList.add('reveal'); // Add the class to trigger the animation
                nameElement.appendChild(span);
                // After a certain time interval, remove the letter
                setTimeout(() => {
                    span.classList.remove('reveal');
                }, 500 * index);
            }, 1000 * index);
        });
    };

    // Call the function for the first time
    toggleLetters();

    // Call the function repeatedly in each cycle
    setInterval(() => {
        nameElement.textContent = ''; // Clear the current content
        toggleLetters(); // Call the function to display and hide the letters again
    }, 1200 * letters.length * 1); // Set the interval to ensure a complete cycle is finished before starting the next one
});

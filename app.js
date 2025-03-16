let amigos = []

const adicionarAmigo = () => {
    let text = document.getElementById('amigo').value
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    if (text.trim()){
        const novoItem = document.createElement('li');
        const listaAmigos = document.getElementById('listaAmigos')
        novoItem.textContent = text
        listaAmigos.appendChild(novoItem)

        // Adicionando à array de amigos
        amigos.push(text)

        // Limpando a input
        input = document.getElementById('amigo')
        input.value = ''
    } else {
        alert('Por favor, insira um nome.')
    }
}

const sortearAmigo = () => {
    if (amigos.length == 0) return;
    
    const numero = Math.floor((Math.random() * amigos.length))
    const listaAmigos = document.getElementById('listaAmigos')
    listaAmigos.innerHTML = ''

    const resultado = document.getElementById('resultado')
    const texto = document.createTextNode(`O amigo sorteado foi: ${amigos[numero]}`);

    resultado.appendChild(texto)
    amigos = []
}
let amigos = [];

function adicionar(params) {
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == "") {
        alert("Informe o nome do amigo!!!")
        return;
    }
    if (amigos.includes(amigo.value)) {
        alert("Nome já adicionado")
        return;
    }
    let lista = document.getElementById("lista-amigos");
    amigos.push(amigo.value)

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent += ", " + amigo.value;
    }
    amigo.value = "";
}

function sortear(params) {

    if (amigos.length < 4) {
        alert("Adicione no minimo 4 amigos!!");
        return;
    }

    embaralha(amigos)
    let sorteio = document.getElementById("lista-sorteio");

    if (sorteio.innerHTML != "") {
        sorteio.innerHTML = "";
        sortear();
    } else {
        for (let i = 0; i < amigos.length; i++) {

            if (i == amigos.length - 1) {
                sorteio.innerHTML += amigos[i] + " --> " + amigos[0];
            } else {
                sorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + "<br>";
            }
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] =
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(params) {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}

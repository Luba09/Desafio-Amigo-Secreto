let listaAmigos = []

function agregarAmigo() {
    let nombre = document.getElementById("amigo").value.trim();
    if (nombre === " ") {
        alert("Ingresa un nombre válido, por favor");
        return;
    }
    //Para agregar a la listaAmigos
    listaAmigos.push(nombre);
    //Para limpiar el campo de entrada
    document.getElementById("amigo").value = " ";
    //Para mostrar la lista actualizada
    actualizarLista();
}

function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpiar lista antes de actualizar

    listaAmigos.forEach(amigo => {
        let item = document.createElement("li");
        item.textContent = amigo;
        listaHTML.appendChild(item);
    });
}

function sortearAmigo() {
    if(listaAmigos.length === 0) {
        alert("No hay amigos en la lista para realizar un sorteo");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random()* listaAmigos.length);
    let amigoSorteado = listaAmigos[indiceAleatorio]
    document.getElementById("resultadoSorteo").textContent =
    "El amigo sorteado es: " + amigoSorteado;
}
let botonSorteo = document.getElementById("sortearAmigo");
botonSorteo.addEventListener("click", sortearAmigo);


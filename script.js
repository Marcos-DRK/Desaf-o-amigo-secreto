const nombres =[];

document.getElementById("nombre").addEventListener("keydown", function(event){
    if (event.key === "Enter") {
        agregarNombre();
    }
});

function agregarNombre(){
    const input = document.getElementById("nombre");
    const nombre = input.value.trim();

    if(nombre && !nombres.includes(nombre)) {
        nombres.push(nombre);
        mostrarNombres();
        input.value = "";
    }else if (nombres.includes(nombre)) {
        alert("El nombre ya ha sido agregado.");
    }
    input.focus();
}

function mostrarNombres(){
    const lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach((nombre) => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function mezclarArray(array){
    for(let i = array.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function asignarAmigos() {
    if (nombres.length < 2) {
        alert("Agrega al menos dos nombres para asignar amigos secretos.");
        return;
    }

    let asignados;
    let valido = false;

    while (!valido) {
        asignados = [...nombres];
        mezclarArray(asignados);
        
        valido = true;
        for (let i = 0; i < nombres.length; i++) {
            if (nombres[i] === asignados[i]) {
                valido = false;
                break;
            }
        }
    }

    let resultadoHTML = "<h2>¡Resultados del Sorteo!</h2>";
    for (let i = 0; i < nombres.length; i++) {
        resultadoHTML += `<p><strong>${nombres[i]}</strong> es el amigo secreto de <strong>${asignados[i]}</strong></p>`;
    }
    document.getElementById("resultado").innerHTML = resultadoHTML;
}

function reiniciarSorteo() {
    nombres.length = 0;
    mostrarNombres();
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("nombre").focus();
}

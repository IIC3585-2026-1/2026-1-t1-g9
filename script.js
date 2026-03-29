function abrirVista(nombre) {
    document.getElementById("inicio").style.display = "none";
    document.getElementById("vista").style.display = "block";
    document.getElementById("tituloVista").textContent = nombre;
}

function volver() {
    document.getElementById("vista").style.display = "none";
    document.getElementById("inicio").style.display = "block";
}
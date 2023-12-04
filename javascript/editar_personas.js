//----------- EDITAR ---------------
let cadena = location.search;

let datos = new URLSearchParams(cadena);

let resultado = {};

for (const [nombre, valor] of datos) {
    resultado[nombre] = valor;
}

console.log(resultado);

document.getElementById("id").value = resultado["id"]
document.getElementById("nombre").value = resultado["nombre"]
document.getElementById("especialidad").value = resultado["especialidad"]
document.getElementById("ubicacion").value = resultado["ubicacion"]
document.getElementById("descripcion").value = resultado["descripcion"]
document.getElementById("telefono").value = resultado["telefono"]

function modificar() {
    let id = document.getElementById("id").value
    let nombreForm = document.getElementById("nombre").value
    let especialidadForm = document.getElementById("especialidad").value
    let ubicacionForm = document.getElementById("ubicacion").value
    let descripcionForm = document.getElementById("descripcion").value
    let telefonoForm = document.getElementById("telefono").value

    let persona = {
        nombre: nombreForm,
        especialidad: especialidadForm,
        ubicacion: ubicacionForm,
        descripcion: descripcionForm,
        telefono: telefonoForm
    }

    let url = "https://adogtime.pythonanywhere.com/update/" + id
    var options = {
        body: JSON.stringify(persona),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            window.location.href = "./adogtor.html";

        })
        .catch(err => {
            console.error(err);
            alert("Error al Modificar")
        })
}
//--------- INGRESAR PERSONA -----------
function guardar() {
    let nombre_ingresado = document.getElementById("nombre").value
    let especialidad_ingresada = document.getElementById("especialidad").value
    let ubicacion_ingresada = document.getElementById("ubicacion").value
    let descripcion_ingresada = document.getElementById("descripcion").value
    let telefono_ingresado = document.getElementById("telefono").value

    console.log(nombre_ingresado);
    console.log(especialidad_ingresada);
    console.log(ubicacion_ingresada);
    console.log(descripcion_ingresada);
    console.log(telefono_ingresado);

    let enviar_nombre = {
        nombre: nombre_ingresado,
        especialidad: especialidad_ingresada,
        ubicacion: ubicacion_ingresada,
        descripcion: descripcion_ingresada,
        telefono: telefono_ingresado
    }
    console.log(enviar_nombre);

    let url = "https://adogtime.pythonanywhere.com/registro"
    var options = {
        body: JSON.stringify(enviar_nombre),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    fetch(url, options)
        .then(function () {
            console.log("creado")
            alert("Grabado")
            window.location.href = "./adogtor.html";

        })
        .catch(err => {
            alert("Error al grabar")
            console.error(err);
        })
}

//----------- VER TABLA ---------------
const { createApp } = Vue

createApp({
    data() {
        return {
            url: "https://adogtime.pythonanywhere.com/personas",
            personas: [],
            error: false,
            cargando: true
        }
    },
    created() {
        this.fetchData(this.url)
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.personas = data;
                    console.log(this.personas)
                    this.cargando = false
                })
                .catch(err => {
                    console.error(err);
                    this.error = true
                });
        },
        eliminar(id) {
            const url = 'https://adogtime.pythonanywhere.com/borrar/' + id;
            var options = {
                method: 'DELETE',
            }
            fetch(url, options)
                .then(res => res.text())
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }
    },
}).mount('#app')
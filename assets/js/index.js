// fetch("./assets/json/esp.json")
//     .then(response => response.json())
//     .then(respuesta => {
//         $("#Home").append($("<p></p>").text(respuesta.nombre));
//         $("#Home").append($("<p></p>").text(respuesta.edad));
//         $("#Home").append($("<p></p>").text(respuesta.email));
//     });


//abrir-cerrar boton menu pantalla movil
const btn_menu = document.querySelector(".btn_menu");
const ul_nav_menu = document.querySelector(".ul_nav_menu");

btn_menu.addEventListener("click", () => {
    ul_nav_menu.classList.toggle("mostrar_menu");
});

//click boton start
const btn_start = document.querySelector(".btn_start");

btn_start.addEventListener("click", () => {
    location.href = '#Objetivos'
});

//abrir-cerrar perfil card
const total_card = document.querySelector(".total_card");
const perfil_card = document.querySelector(".perfil_card");
// const card_backside = document.querySelector(".card_backside");
const card_page = document.querySelector(".card_page");

total_card.addEventListener("click", () => {
    total_card.classList.toggle("total_card_click");
    perfil_card.classList.toggle("perfil_card_click");
    // card_backside.classList.toggle("card_backside_show");
    card_page.classList.toggle("card_page_show");
});

//textarea auto height
function auto_grow(element) {
    element.style.height = "0px";
    element.style.height = (element.scrollHeight) + "px";
    const form = document.getElementById("form_box");
    form.style.height = "0px";
    form.style.height = (element.scrollHeight + 350) + "px";
}

//placeholder >> label up (normal inputs)
for (let i = 0; i < 3; i++) {
    let input = document.querySelectorAll("input")[i];
    let label = document.querySelectorAll("label")[i];
    input.addEventListener("blur", () => {
        if (input.value == "") {
            label.classList.remove("label_up")
        } else {
            label.classList.add("label_up")
        }
    })
}

//placeholder >> label up (textarea)
let mensaje = document.getElementById("mensaje");

mensaje.addEventListener("blur", () => {
    if (mensaje.value == "") {
        document.querySelectorAll("label")[3].classList.remove("label_up")
    } else {
        document.querySelectorAll("label")[3].classList.add("label_up")
    }
})

//validar formulario

let NombreError = EmailError = MotivoError = MensajeError = true;

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML=mensaje;
}

function validarNombre() {
    let nombre = document.formulario.nombre.value;
    if (nombre === "") {
        mostrarError("errorNombre", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorNombre", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(nombre) === false) {
            mostrarError("errorNombre", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorNombre", "");
            NombreError = false;
            localStorage.setItem("Nombre",nombre);
        }
    }
}

function validarEmail() {
    let email = document.formulario.email.value;
    if (email === "") {
        mostrarError("errorEmail", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorEmail", "")
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (regex.test(email) === false) {
            mostrarError("errorEmail", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorEmail", "");
            EmailError = false;
            localStorage.setItem("Email",email);
        }
    }
}

function validarMotivo() {
    let motivo = document.formulario.motivo.value;
    if (motivo === "") {
        mostrarError("errorMotivo", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorMotivo", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(motivo) === false) {
            mostrarError("errorMotivo", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorMotivo", "");
            NombreError = false;
            localStorage.setItem("Motivo",motivo);
        }
    }
}

function validarMensaje() {
    let mensaje = document.formulario.mensaje.value;
    if (mensaje === "") {
        mostrarError("errorMensaje", "ERROR: Campo vacio")
    }
    else {
        mostrarError("errorMensaje", "")
        var regex = /^[a-zA-Z\s]+$/;
        if (regex.test(mensaje) === false) {
            mostrarError("errorMensaje", "ERROR: Formato no valido")
        }
        else {
            mostrarError("errorMensaje", "");
            NombreError = false;
            localStorage.setItem("Mensaje", mensaje);
        }
    }
}


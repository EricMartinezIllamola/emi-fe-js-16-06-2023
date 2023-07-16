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

//abrir-cerrar dropdown (mobile)
// for (let i = 0; i < 2; i++) {
//     const li_dropdown = document.querySelector(".dropdown")[i];
//     const content_dropdown = document.querySelector(".content_dropdown")[i];

//     li_dropdown.addEventListener("click", () => {
//         content_dropdown.classList.toggle("mostrar_dropdown");
//     });
// }

//abrir-cerrar perfil card
const total_card = document.querySelector(".total_card");
const perfil_card = document.querySelector(".perfil_card");
const card_page = document.querySelector(".card_page");
const close_card = document.querySelector(".close_card");

perfil_card.addEventListener("click", () => {
    total_card.classList.add("total_card_click");
    card_page.classList.add("card_page_click");
});

close_card.addEventListener("click", () => {
    total_card.classList.remove("total_card_click");
    card_page.classList.remove("card_page_click");
    total_card.classList.remove("total_card_disappear");
});

//perfil card responsive
const card_backside = document.querySelector(".card_backside");

card_backside.addEventListener("click", () => {
    total_card.classList.add("total_card_disappear");
});

//expand-collapse text
for (i = 0; i < 2; i++) {
    let collapse_button = document.getElementsByClassName("collapse_button")[i];
    let collapse_content = document.getElementsByClassName("collapse_content")[i];
    collapse_button.addEventListener("click", () => {
        // collapse_button.classList.toggle("collapse_active");
        collapse_content.classList.toggle("expand_content");
    });
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

//textarea auto height
function auto_grow(element) {
    element.style.height = "0px";
    element.style.height = (element.scrollHeight) + "px";
    const form = document.getElementById("form_box");
    form.style.height = "0px";
    form.style.height = (element.scrollHeight + 350) + "px";
}

//validar formulario

let NombreError = EmailError = MotivoError = MensajeError = true;

function mostrarError(id, mensaje) {
    document.getElementById(id).innerHTML = mensaje;
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
            localStorage.setItem("Nombre", nombre);
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
            localStorage.setItem("Email", email);
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
            localStorage.setItem("Motivo", motivo);
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
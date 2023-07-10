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

const btn_start = document.querySelector(".btn_start");

btn_start.addEventListener("click", () => {
    location.href='#Objetivos'
});

const perfil_card = document.querySelector(".perfil_card");
const card_backside = document.querySelector(".card_backside");
const card_page = document.querySelector(".card_page");

perfil_card.addEventListener("click", () => {
    perfil_card.classList.toggle("perfil_card_invi");
    card_backside.classList.toggle("card_backside_show");
    card_page.classList.toggle("card_page_show");
});
// fetch("./assets/json/esp.json")
//     .then(response => response.json())
//     .then(respuesta => {
//         $("#Home").append($("<p></p>").text(respuesta.nombre));
//         $("#Home").append($("<p></p>").text(respuesta.edad));
//         $("#Home").append($("<p></p>").text(respuesta.email));
//     });



const btn_menu = document.querySelector(".btn_menu");
const ul_nav_menu = document.querySelector(".ul_nav_menu");

btn_menu.addEventListener("click", () => {
    ul_nav_menu.classList.toggle("mostrar_menu");
});

const btn_start = document.querySelector(".btn_start");

btn_start.addEventListener("click", () => {
    location.href='#Objetivos'
});
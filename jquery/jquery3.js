/* Tercer ejercicio: Mostrar u ocultar párrafos con efectos e identificadores */

$(function () {
    /* Forma más corta de escribir el ready */
   $("#btn-mostrar").click(function (e) { 
    e.preventDefault();
    $("#parrafo1").fadeIn();
   });
   $("#btn-ocultar").click(function (e) { 
    e.preventDefault();
    $("#parrafo2").fadeOut();
   });
});